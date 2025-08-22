import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const { connectDB } = require("@/lib/db");

export const POST = async (req) => {

    const db = await connectDB();
  try {
    const body = await req.json();
    const { name, email, ccode, mobile, password, confirmPassword, refercode, parentcode } = body;

    if (!name || !email || !mobile || !password || !confirmPassword) {
      return NextResponse.json({ error: "All required fields must be filled" }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match" }, { status: 400 });
    }

    // check if user exists
    const [existing] = await db.query(
      "SELECT id FROM tbl_user WHERE email = ? OR mobile = ?",
      [email, mobile]
    );

    if (existing.length > 0) {
      return NextResponse.json({ error: "Email or Mobile already registered" }, { status: 400 });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // generate unique refercode
    const userReferCode = refercode || Math.floor(100000 + Math.random() * 900000).toString();

    // insert into db
    const [result] = await db.query(
      `INSERT INTO tbl_user 
   (name, email, ccode, mobile, refercode, parentcode, password, registartion_date, ustatus) 
   VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), ?)`,
  [name, email, ccode, mobile, userReferCode, parentcode || null, hashedPassword, 1]
    );

    const userId = result.insertId;

    // generate JWT
    const token = jwt.sign({ id: userId, email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // set cookie
    const response = NextResponse.json({
      message: "Signup successful",
      user: { id: userId, name, email, mobile, refercode: userReferCode },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
};
