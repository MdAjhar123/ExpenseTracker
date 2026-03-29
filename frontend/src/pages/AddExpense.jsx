import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function AddExpense() {
  const [expense, setExpense] = useState({});
  const navigate = useNavigate();

  const submit = async () => {
    await API.post("/expense", expense);
    navigate("/list");
  };

  return (
    <div className="card">
      <h3>Add New Expense</h3>
      <input placeholder="Expense Name" onChange={e => setExpense({...expense, expenseName: e.target.value})} />
      <input placeholder="Amount" onChange={e => setExpense({...expense, amount: e.target.value})} />
      <input type="date" onChange={e => setExpense({...expense, date: e.target.value})} />
      <textarea placeholder="Description" onChange={e => setExpense({...expense, description: e.target.value})}></textarea>
      <button onClick={submit}>Add Expense</button>
    </div>
  );
}

export default AddExpense;
