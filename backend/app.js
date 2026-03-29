const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRout");
const expenseRoutes = require("./routes/expenseRout");

const app = express();
const port = process.env.PORT || 3000;
connectDB();

app.use(cors());
app.use(express.json());      


app.use("/api/auth", authRoutes);
app.use("/api/expense", expenseRoutes);


app.get("/", (req, res) => {
  res.send("Expense Tracker app is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


