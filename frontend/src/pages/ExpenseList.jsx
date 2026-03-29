import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    API.get("/expense").then(res => setExpenses(res.data));
  }, []);

  return (
    <div className="page">
      <div className="expense-card">
        <h3 className="card-title">Expense List</h3>

        {expenses.map(e => (
          <div key={e._id} className="expense-item">
            <div>
              <p className="expense-name">{e.expenseName}</p>
              <p className="expense-amount">Amount: ₹{e.amount}</p>
              {/* <p className="expense-desc">Description: {e.description}</p> */}
              <p className="expense-date">
                Date: {new Date(e.date).toLocaleDateString("en-IN")}
              </p>
            </div>

            <div>
              <Link to={`/edit/${e._id}`} className="edit-btn">
                Edit
              </Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;



