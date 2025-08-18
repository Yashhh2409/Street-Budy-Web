import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const db = await connectDB();
    const body = await req.json();

    console.log("Body getting:", body);

 

    // Destructure with safe defaults
    const {
      uid,
      store_id = "",
      product_id,
      attribute_id = 0,
      quantity = 1,
      price,
      product_title = "",
      product_img = "",
      cart_type = "normal",
      variation = null,
      visible = 1,
      subscription_data = "",
    } = body;

       const imageUrl = product_img;
    const imageFilename = imageUrl ? imageUrl.split("https://admin.streetbuddy.in/").pop() : "";

    if (!uid || !product_id || !store_id || !price) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if item already exists
    const [existingRows] = await db.query(
      `SELECT id, quantity 
       FROM tbl_cart_data 
       WHERE uid = ? AND product_id = ? AND attribute_id = ?`,
      [uid, product_id, attribute_id]
    );

    if (existingRows.length > 0) {
      // Update quantity if exists
      const cartId = existingRows[0].id;

      await db.query(
        `UPDATE tbl_cart_data 
         SET quantity = ?, updated_at = CURRENT_TIMESTAMP 
         WHERE id = ?`,
        [quantity, cartId]
      );

      return NextResponse.json(
        { message: "Quantity updated in cart" },
        { status: 200 }
      );
    }

    // Insert new cart item
    const insertSQL = `
      INSERT INTO tbl_cart_data 
      (uid, store_id, product_id, attribute_id, quantity, price, product_title, product_img, cart_type, variation, visible, subscription_data) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await db.query(insertSQL, [
      uid,
      store_id,
      product_id,
      attribute_id,
      quantity,
      price,
      product_title,
      imageFilename,
      cart_type,
      variation,
      visible,
      subscription_data,
    ]);

    return NextResponse.json(
      { message: "Item added to cart" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Cart DB error:", err.message);
    return NextResponse.json({ message: "Insert failed" }, { status: 500 });
  }
};
