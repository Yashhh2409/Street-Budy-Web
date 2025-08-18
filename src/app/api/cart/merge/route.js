import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { uid, items } = body;

    if (!uid || !items || items.length === 0) {
      return NextResponse.json(
        { message: "No items to merge" },
        { status: 400 }
      );
    }

    const db = await connectDB();

    for (let item of items) {
      const [rows] = await db.execute(
        "SELECT * FROM tbl_cart_data WHERE user_id = ? AND product_id = ?",
        [uid, item.id]
      );

      if (rows.length > 0) {
        // Item already exists update quantity
        await db.execute(
          "UPDATE tbl_cart_data SET quantity = quantity = ? WHERE user_id = ? AND product_id = ?",
          [item.quantity, uid, item.id]
        );
      } else {
        // Insert new item
        await db.execute(
          "INSERT INTO tbl_cart_data (user_id, product_id, title, price, image, quantity) VALUES (?, ?, ?, ?, ?, ?)",
          [uid, item.id, item.title, item.price, item.image, item.quantity || 1]
        );
      }
    }

    // fetch updated cart
    const [updated] = await db.execute(
      "SELECT * FROM tbl_cart_data WHERE user_id = ?",
      [uid]
    );

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Merge error:", error);
    return NextResponse.json({message: "Error merging cart"}, {status: 500})
  }
};
