import mysql from 'mysql2/promise';

let pool;

export async function connectDB() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10, 
      queueLimit: 0
    });
    console.log("MySQL pool created");
  }
  return pool;
}
