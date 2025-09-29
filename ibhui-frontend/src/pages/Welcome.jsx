import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api";
import "../stylesheets/welcome.css"; // custom styles
import logo from "../assets/logo.png"; // adjust path if your logo is elsewhere

export default function Welcome() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = async () => {
    try {
      await logoutUser(token);
    } catch (err) {
      console.warn("Logout error:", err.message);
    } finally {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  return (
    <div className="welcome-page">
      {/* Navbar */}
      <nav className="navbar navbar-light bg-light px-4 shadow-sm d-flex justify-content-between">
        {/* Logo Image */}
        <img
          src={logo}
          alt="Inam Burqa House Logo"
          className="navbar-logo"
        />

        {/* Logout Button */}
        <button onClick={handleLogout} className="btn btn-outline-danger">
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <div className="welcome-content">
        <h1>Welcome to Inam Burqa House</h1>
      </div>
    </div>
  );
}
