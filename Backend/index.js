require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json()); 

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

app.post("/submit-form", async (req, res) => {
  const { fullName, email, phone, message } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO form_submissions (full_name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING *",
      [fullName, email, phone, message]
    );

    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error saving form:", error);
    res.status(500).json({ success: false, message: "Error saving form" });
  }
});

app.post("/submit-form-company", async (req, res) => {
  const { fullName, companyName, phone, message } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO form_submissions_company (full_name, company_name, phone, message) VALUES ($1, $2, $3, $4) RETURNING *",
      [fullName, companyName, phone, message]
    );

    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error saving form:", error);
    res.status(500).json({ success: false, message: "Error saving form" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
