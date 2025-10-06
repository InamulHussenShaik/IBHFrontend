import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api";
import "../stylesheets/home.css";
import logo from "../assets/Logo.png";
import LogoutPopup from "../components/LogoutPopup";

import BurqaCollection from "./BurqaCollection";
import MaqnaCollection from "./MaqnaCollection";

export default function Welcome() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [activeSection, setActiveSection] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleLogoutClick = () => {
    setShowPopup(true);
  };

  const confirmLogout = async () => {
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
      <nav className="navbar navbar-light bg-light px-4 shadow-sm fixed-top justify-content-between">
        <img
          src={logo}
          alt="Logo"
          className="navbar-logo"
          onClick={() => setActiveSection("")}
        />

        <div className="d-flex align-items-center gap-3">
          <select
            className="form-select"
            style={{ width: "200px" }}
            value={activeSection}
            onChange={(e) => setActiveSection(e.target.value)}
          >
            <option value="">Go to Section</option>
            <option value="burqa">Burqa Collection</option>
            <option value="maqna">Maqna Collection</option>
          </select>

          <button onClick={handleLogoutClick} className="btn btn-outline-danger">
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="welcome-content">
        {activeSection === "" && (
          <div className="text-center">
            <h1>WELCOME TO </h1>
            <img
              src={logo}
              alt="Inam Burqa House Logo"
              className="welcome-logo mt-3"
              style={{ width: "300px", height: "auto" }}
            />
          </div>
        )}
        {activeSection === "burqa" && <BurqaCollection />}
        {activeSection === "maqna" && <MaqnaCollection />}
      </div>

      {/* ✅ Logout Popup (outside content, fixed overlay) */}
    <LogoutPopup
  show={showPopup}
  onConfirm={confirmLogout}
  onCancel={() => setShowPopup(false)}
/>
    </div>
  );
}
