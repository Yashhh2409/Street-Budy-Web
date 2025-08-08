import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const db = await connectDB();

    const [res] = await db.query(`SELECT * FROM tbl_cart_data`);
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ message: "Error fetching cart data:"}, {status: 500});
  }
};
