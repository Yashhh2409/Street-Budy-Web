// /api/cart/remove/route.js
import { NextResponse } from "next/server";
const { connectDB } = require("@/lib/db");

export const DELETE = async (req) => {
  const db = await connectDB();

  try {
    const { id, uid } = await req.json();

    // Soft delete (set visible = 0)
    await db.query(
      `UPDATE tbl_cart_data SET visible = 0 WHERE id = ? AND uid = ?`,
      [id, uid]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Remove Cart Item Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
