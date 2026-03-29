import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Welcome to Expense Tracker</h2>

        <div className="dashboard-links">
          <Link to="/add">Add Expense</Link>
          <Link to="/list">Expense List</Link>
        </div>

        <p>
          Track and manage your expenses efficiently.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

