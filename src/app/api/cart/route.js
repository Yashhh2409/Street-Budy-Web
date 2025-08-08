// /api/cart/route.js
import { NextResponse } from "next/server";
const { connectDB } = require("@/lib/db");

export const GET = async (req) => {
  const db = await connectDB();

  try {
    const uid = req.nextUrl.searchParams.get("uid");

    const [items] = await db.query(
      `SELECT * FROM tbl_cart_data WHERE uid = ? AND visible = 1`,
      [uid]
    );

    // Parse variation + subscription_data JSON fields
    const parsedItems = items.map(item => ({
      ...item,
      variation: item.variation ? JSON.parse(item.variation) : null,
      subscription_data: item.subscription_data ? JSON.parse(item.subscription_data) : null,
    }));

    return NextResponse.json(parsedItems);
  } catch (error) {
    console.error("Fetch Cart Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
