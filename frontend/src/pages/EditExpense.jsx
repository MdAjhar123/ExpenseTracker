import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

function EditExpense() {
  const { id } = useParams();
  const [expense, setExpense] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/expense").then(res => {
      const data = res.data.find(e => e._id === id);
      setExpense(data);
    });
  }, [id]);

  const submit = async () => {
    await API.put(`/expense/${id}`, expense);
    navigate("/list");
  };

  return (
    <div className="card">
      <h3>Update Expense</h3>
      <input value={expense.expenseName || ""} onChange={e => setExpense({...expense, expenseName: e.target.value})} />
      <input value={expense.amount || ""} onChange={e => setExpense({...expense, amount: e.target.value})} />
      <input type="date" value={expense.date?.substring(0,10)} onChange={e => setExpense({...expense, date: e.target.value})} />
      <textarea value={expense.description || ""} onChange={e => setExpense({...expense, description: e.target.value})}></textarea>
      <button onClick={submit}>Update Expense</button>
    </div>
  );
}

export default EditExpense;
