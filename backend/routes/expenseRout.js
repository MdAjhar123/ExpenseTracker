const express = require("express");
const {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense
} = require("../controller/expenseController");

const authMiddleware = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/", authMiddleware, addExpense);
router.get("/", authMiddleware, getExpenses);
router.put("/:id", authMiddleware, updateExpense);
router.delete("/:id", authMiddleware, deleteExpense);

module.exports = router;
