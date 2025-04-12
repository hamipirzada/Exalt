require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise"); // Using mysql2 for async/await support

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 Serve React static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// ✅ Catch-all route for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT || 3306, // Default MySQL port
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Check database connection
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Database connected successfully!");
    connection.release();
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit process if DB connection fails
  }
})();

// Route to handle form submissions
app.post("/submit-form", async (req, res) => {
  const { fullName, email, phone, message } = req.body;

  try {
    const [result] = await pool.execute(
      "INSERT INTO form_submissions (full_name, email, phone, message) VALUES (?, ?, ?, ?)",
      [fullName, email, phone, message]
    );

    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      data: { id: result.insertId, fullName, email, phone, message }
    });
  } catch (error) {
    console.error("Error saving form:", error);
    res.status(500).json({ success: false, message: "Error saving form" });
  }
});

// Route to handle company form submissions
app.post("/submit-form-company", async (req, res) => {
  const { fullName, companyName, email, phone, message } = req.body;

  try {
    const [result] = await pool.execute(
      "INSERT INTO form_submissions_company (full_name, company_name, email, phone, message) VALUES (?, ?, ?, ?, ?)",
      [fullName, companyName,email, phone, message]
    );

    res.status(201).json({
      success: true,
      message: "Company form submitted successfully",
      data: { id: result.insertId, fullName, companyName, phone, message }
    });
  } catch (error) {
    console.error("Error saving company form:", error);
    res.status(500).json({ success: false, message: "Error saving company form" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
