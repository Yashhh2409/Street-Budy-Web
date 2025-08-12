import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const user_id = searchParams.get("user_id");

    if (!user_id) {
      return NextResponse.json({ message: "Missing user_id" }, { status: 400 });
    }

    const db = await connectDB();

    const [res] = await db.query(
      `SELECT 
        c.id,
        c.uid,
        c.store_id,
        c.product_id,
        c.attribute_id,
        c.quantity,
        c.price,
        c.product_title,
        c.product_img,
        c.cart_type,
        c.variation,
        c.visible,
        c.subscription_data,
        c.created_at,
        c.updated_at,
        IFNULL(a.discount, 0) AS discount
      FROM tbl_cart_data AS c
      LEFT JOIN tbl_product_attribute AS a
        ON c.attribute_id = a.id
      WHERE c.uid = ?`,
      [user_id] 
    );

    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.error("Cart fetch error:", error.message);
    return NextResponse.json(
      { message: "Error fetching cart data" },
      { status: 500 }
    );
  }
};
