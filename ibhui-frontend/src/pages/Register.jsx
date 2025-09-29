import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api";
import "../stylesheets/register.css"; // custom styles

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ username, email, phone, password, confirmPassword });
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form card p-4 shadow">
        <h2 className="text-center mb-4">Register</h2>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Phone"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Register
        </button>

        <p className="text-center mt-3 text-muted">
          Already have an account?{" "}
          <Link to="/login" className="text-primary fw-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
