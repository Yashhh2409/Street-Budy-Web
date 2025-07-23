import { NextResponse } from "next/server";

const { connectDB } = require("@/lib/db");

export const GET = async () => {
  try {
    const db = await connectDB();
    const [rows] = await db.execute("SELECT * FROM tbl_product_attribute");
    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
