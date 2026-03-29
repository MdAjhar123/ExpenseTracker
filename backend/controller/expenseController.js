const Expense = require("../model/expense");

// ADD EXPENSE
exports.addExpense = async (req, res) => {
  try {
    const expense = await Expense.create({
      ...req.body,
      userId: req.user.id
    });
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET EXPENSES
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.id });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE EXPENSE
exports.updateExpense = async (req, res) => {
  try {
    await Expense.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Expense updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE EXPENSE
exports.deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
