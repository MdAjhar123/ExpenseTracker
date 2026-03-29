import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import EditExpense from "./pages/EditExpense";
import ExpenseList from "./pages/ExpenseList";
import Navbar from "./components/Navbar";

const PrivateRoute = ({ children }) => {
  return localStorage.getItem("token") ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/add" element={<PrivateRoute><AddExpense /></PrivateRoute>} />
        <Route path="/edit/:id" element={<PrivateRoute><EditExpense /></PrivateRoute>} />
        <Route path="/list" element={<PrivateRoute><ExpenseList /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
