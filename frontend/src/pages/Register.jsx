import { useState } from "react";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const submit = async () => {
    await API.post("/auth/register", form);
    navigate("/login");
  };

  return (
    <div className="card">
      <h3>Registration</h3>
      <input placeholder="Username" onChange={e => setForm({...form, username: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
      <input placeholder="Full Name" onChange={e => setForm({...form, fullName: e.target.value})} />
      <button onClick={submit}>Register</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Register;
