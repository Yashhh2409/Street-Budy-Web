import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const db = await connectDB();
    const { searchParams } = new URL(req.url);
    const uid = searchParams.get("uid");

    if (!uid) {
      return NextResponse.json({ message: "uid required" }, { status: 401 });
    }

    const [res] = await db.query("SELECT * FROM tbl_cart_data WHERE uid = ?", [
      uid,
    ]);
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.error("Cant fetch cart items", error.message);
    return NextResponse.json(
      { message: "Error fetching cart items" },
      { status: 500 }
    );
  }
};
