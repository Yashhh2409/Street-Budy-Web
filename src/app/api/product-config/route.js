import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const { searchParams } = new URL(req.url);
    const product_id = searchParams.get("product_id");

    const db = await connectDB();

    // Fetch product options
    const [options] = await db.execute(
      `SELECT * FROM tbl_product_options WHERE product_id = ?`,
      [product_id]
    );

    // Fetch product addons
    const [addons] = await db.execute(
      `SELECT * FROM tbl_product_addons WHERE product_id = ?`,
      [product_id]
    );

    return NextResponse.json(
      {
        product_id,
        options,
        addons,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching product details:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
