// /app/api/me/route.js

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const GET = async (req) => {
  try {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Return user data stored in the token (like id, email)
    return NextResponse.json({ user: decoded });
  } catch (err) {
    console.error("Auth error:", err);
    return NextResponse.json({ user: null }, { status: 401 });
  }
};
