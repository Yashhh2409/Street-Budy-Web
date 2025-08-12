import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const db = await connectDB();
  const body = await req.json();
  const { uid, product_id, action } = body;

  console.log("Data recieved:", uid, product_id, action);
  

  if (!uid || !product_id || !action) {
    return NextResponse.json({ error: "Missing required fields" }, {status: 401});
  }

  try {
    if (action === "increase") {
      await db.query(
        `UPDATE tbl_cart_data SET quantity = quantity + 1 WHERE uid=? AND product_id = ?`,
        [uid, product_id]
      );
    }

    if (action === "decrease") {
      await db.query(
        `UPDATE tbl_cart_data SET quantity = quantity - 1 WHERE uid = ? AND product_id = ? AND quantity > 1`,
        [uid, product_id]
      );
    }

    if (action === "delete") {
      await db.query(
        `DELETE FROM tbl_cart_data WHERE uid = ? AND product_id = ?`,
        [uid, product_id]
      );
    }

    const [cart] = await db.query(`SELECT * FROM tbl_cart_data WHERE uid = ?`, [
      uid,
    ]);
    return NextResponse.json({ success: true, cart }, {status: 200});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, {status: 400});
  }
};