import { NextResponse } from "next/server";
const { connectDB } = require("@/lib/db");

export const GET = async () => {
  try {
    const db = await connectDB();

    // const [products] = await db.query(
    //   `SELECT
    //      p.id,
    //      p.title AS product_name,
    //      sd.title AS store_name,
    //      p.img,
    //      tpa.normal_price,
    //      tpa.discount
    //    FROM tbl_product AS p
    //    INNER JOIN service_details AS sd ON p.store_id = sd.id
    //    INNER JOIN tbl_product_attribute AS tpa ON p.id = tpa.product_id`
    // );

    const [products] = await db.query(
      `select p.id, p.title as product_name, sd.id as store_id, tpa.id as attribute_id, sd.title as store_name, p.img, tpa.normal_price, tpa.discount, tpo.option_name, tpo.option_values
from tbl_product as p
inner join service_details as sd on p.store_id = sd.id
inner join tbl_product_attribute as tpa on p.id = tpa.product_id
left join tbl_product_options as tpo on p.id = tpo.product_id;`
    );

    if (!products || products.length === 0) {
      return NextResponse.json(
        { error: "Products not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error:", error.message);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error", detail: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
