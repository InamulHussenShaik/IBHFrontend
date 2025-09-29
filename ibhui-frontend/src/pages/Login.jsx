import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api";
import '../stylesheets/login.css'; // correct import path
import logo from "../assets/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await loginUser(email, password);
      localStorage.setItem("token", token);
      navigate("/"); // go to welcome page on successful login
    } catch (err) {
      alert(err.message); // show proper error
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
            <div className="login-header">
          <img src={logo} alt="IBH Logo" className="login-logo" />
          <p className="entryheading">Login</p>
        </div>

        <input
          type="email"
          placeholder="Email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn-outline-blue loginbutton">
          Login
        </button>

        <p>
          No account?{" "}
          <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}
