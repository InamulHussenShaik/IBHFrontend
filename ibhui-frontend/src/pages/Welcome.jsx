import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to Inam Burqa House</h1>
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
