import { NextResponse } from "next/server";
const { connectDB } = require("@/lib/db");

export const GET = async (req, { params }) => {
  const { id } = params;
  const db = await connectDB();

  try {
    // get main product
    const [productRows] = await db.query(
      "SELECT * FROM tbl_product WHERE id = ?",
      [id]
    );

    if (productRows.length === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const product = productRows[0];

    // get product attributes
    const [attributes] = await db.query(
      "SELECT * FROM tbl_product_attribute WHERE product_id = ?",
      [id]
    );

    // get product addons
    const [addons] = await db.query(
      "SELECT * FROM tbl_product_addons WHERE product_id = ?",
      [id]
    );

    // get product options
    const [options] = await db.query(
      "SELECT * FROM tbl_product_options WHERE product_id = ?",
      [id]
    );

    const fullProduct = {
      ...product,
      addons,
      attributes,
      options,
    };

    return NextResponse.json(fullProduct);
  } catch (error) {
    console.error("Error in product full details:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

