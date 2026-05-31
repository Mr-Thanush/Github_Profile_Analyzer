import pool from "./config/db.js";
const testDB = async () => {
  try {
    const [rows] = await pool.query("SELECT 1");
    console.log(" MySQL Connected Successfully");
  } catch (error) {
    console.error(" MySQL Connection Failed", error);
  }
};
testDB();