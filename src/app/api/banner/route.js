import { NextResponse } from "next/server";

const { connectDB } = require("@/lib/db");

export const GET = () => {
  try {
    const db = connectDB();
    const response = db.query("SELECT * FROM banner");
    const data = response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
