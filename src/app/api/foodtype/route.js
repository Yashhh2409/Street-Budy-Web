import { connectDB } from '@/lib/db';
import { NextResponse } from 'next/server';

export const GET = async () => {
 try {
    const db = await connectDB();
    const [rows] = await db.execute('SELECT * FROM tbl_mcat');
    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

