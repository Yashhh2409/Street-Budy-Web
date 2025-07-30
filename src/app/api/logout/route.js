// /app/api/logout/route.js
import { NextResponse } from "next/server";

export const GET = () => {
  const res = NextResponse.json({ message: "Logged out" });
  res.cookies.set("token", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });
  return res;
};
