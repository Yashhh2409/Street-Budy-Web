import { signinToken } from "@/lib/auth";
import { NextResponse } from "next/server";
const {connectDB} = require("@/lib/db");
const bcrypt = require("bcryptjs");

export const POST = async (req) => {
    try {
        const db = await connectDB();
        const {name, email, ccode, mobile, refercode, password, confirmPassword, parentcode} = await req.json();

        if(!name || !email || !password || !mobile || !confirmPassword) {
            return NextResponse.json({error: "Missing required fileds"}, 
                {status: 400}
            );
        }

        if(password !== confirmPassword) {
            return NextResponse.json({error: "Password & confirm password not matching"}, {status: 400});
        }

        const [existing] = await db.query('SELECT id FROM tbl_user WHERE email = ?', [email]);

        if(existing.length > 0 ) {
            return NextResponse.json({error: "User already exists"}, {status: 409})
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const now = new Date();

        const [result] = await db.query(`INSERT INTO tbl_user (name, email, ccode, mobile, refercode, parentcode, password, registartion_date) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, email, ccode, mobile, refercode || 0, parentcode || null, hashedPassword, now]
    );

    const token = signinToken({id: result.insertId, email});

    const res  = NextResponse.json({message: "Signup successful", token});
    res.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: "lax",
        path: '/',
    })

    return res;

    } catch (error) {
         console.error(error);
    return NextResponse.json({ error: 'Signup failed' }, { status: 500 });
    }
}