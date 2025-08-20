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
      const imageUrl = item.product_img;
      const imageFilename = imageUrl
        ? imageUrl.split("https://admin.streetbuddy.in/").pop()
        : "";

      const [rows] = await db.execute(
        "SELECT * FROM tbl_cart_data WHERE uid = ? AND product_id = ?",
        [uid, item.id]
      );

      if (rows.length > 0) {
        // Item already exists update quantity
        await db.execute(
          "UPDATE tbl_cart_data SET quantity = ? WHERE uid = ? AND product_id = ?",
          [item.quantity, uid, item.id]
        );
      } else {
        // Insert new item
        await db.execute(
          `INSERT INTO tbl_cart_data 
      (uid, store_id, product_id, attribute_id, quantity, price, product_title, product_img, cart_type, variation, visible, subscription_data) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            uid,
            item.store_id,
            item.id,
            item.attribute_id,
            item.quantity || 1,
            item.price,
            item.product_title,
            imageFilename,
            item.cart_type || "normal",
            item.variations,
            item.visible || 1,
            item.subscription_data || null,
          ]
        );
      }
    }

    // fetch updated cart
    const [updated] = await db.execute(
      "SELECT * FROM tbl_cart_data WHERE uid = ?",
      [uid]
    );

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Merge error:", error);
    return NextResponse.json(
      { message: "Error merging cart" },
      { status: 500 }
    );
  }
};
