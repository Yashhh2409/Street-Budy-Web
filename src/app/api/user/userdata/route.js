import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
const { connectDB } = require("@/lib/db");

// Secret must match your token creation
const SECRET = process.env.JWT_SECRET;

export const GET = async (req) => {
  const db = await connectDB();
  try {
    const cookies = req.headers.get("cookie") || "";
    const token = cookies
      .split(";")
      .find((c) => c.trim().startsWith("token="))
      ?.split("=")[1];

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, SECRET);
    const userId = decoded.id;

    // Fetch user details
    const [userRes] = await db.query("SELECT id, name, email FROM tbl_user WHERE id = ?", [userId]);
    const user = userRes[0];

    // Fetch user cart
    const [cart] = await db.query("SELECT * FROM tbl_cart WHERE user_id = ?", [userId]);

    // Fetch orders
    const [orders] = await db.query("SELECT * FROM tbl_order WHERE user_id = ?", [userId]);

    // Fetch location
    const [locationRes] = await db.query("SELECT latitude, longitude FROM tbl_location WHERE user_id = ?", [userId]);
    const location = locationRes[0] || null;

    return NextResponse.json({
      user: {
        ...user,
        cart,
        orders,
        location,
      },
    });
  } catch (err) {
    console.error("Error fetching user data:", err);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};


// Fetch UserData in components 

// useEffect(() => {
//   const fetchUserData = async () => {
//     const res = await fetch("/api/user/profile");
//     const data = await res.json();
//     console.log(data.user); // Full user + cart + orders + location
//   };

//   fetchUserData();
// }, []);


// const res = await fetch("/api/user/userdata");
