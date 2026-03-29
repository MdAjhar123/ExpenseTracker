import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  if (!localStorage.getItem("token")) return null;

  return (
    <nav className="navbar">
      
      <div className="nav-left">
        <Link to="/" className="nav-link">Expense Tracker</Link>
        {/* <Link to="/add" className="nav-link">Add Expense</Link> */}
        {/* <Link to="/list" className="nav-link">Expense List</Link> */}
      </div>

  
      <div className="nav-right">
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

