const { connectDB } = require("@/lib/db");
const { NextResponse } = require("next/server");

export const GET = async () => {
  try {
    const db = await connectDB();
    const [rows] = await db.execute("SELECT * FROM tbl_product");

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
