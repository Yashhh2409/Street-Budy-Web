import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

// Cache variables
let cacheData = null;
let cacheTime = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export const GET = async () => {
  try {
    const now = Date.now();

    // Serve from cache if fresh
    if (cacheData && now - cacheTime < CACHE_TTL) {
      console.log("Served from cache in", Date.now() - now, "ms");
      return NextResponse.json(cacheData);
    }

    // Connect to DB
    const start = Date.now();
    const db = await connectDB();
    console.log("DB connected in", Date.now() - start, "ms");

    // Query DB
    const qStart = Date.now();
    const [rows] = await db.execute("SELECT * FROM tbl_mcat");
    console.log("Query executed in", Date.now() - qStart, "ms");

    // Store in cache
    cacheData = rows;
    cacheTime = now;

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
