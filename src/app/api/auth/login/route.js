import { NextResponse } from "next/server";
const { connectDB } = require("@/lib/db");
import { signinToken } from "@/lib/auth";
import bcrypt from "bcryptjs"

export const POST = async (req) => {
  try {
    const db = await connectDB();
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const [users] = await db.query("SELECT * FROM tbl_user WHERE email = ?", [
      email,
    ]);
    const user = users[0];

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // const isMatch = password === user.password;
    // if (!isMatch) {
    //   return NextResponse.json(
    //     { error: "Invalid credentials" },
    //     { status: 401 }
    //   );
    // }

    const token = signinToken({ id: user.id, email: user.email });

    const res = NextResponse.json({ message: "Login successful", token });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
    return res;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
};
