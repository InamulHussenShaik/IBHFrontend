import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // e.g. https://ibhbackend.onrender.com/api/auth
  timeout: 20000, // ⏱ increased to 20s for Render cold start
});

// ✅ Optional interceptor for better error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      alert("⏳ The server is waking up... Please wait a few seconds and try again.");
    } else if (!error.response) {
      alert("⚠️ Unable to reach the server. Please check your connection.");
    } else {
      const status = error.response.status;
      if (status === 403) {
        alert("❌ Access forbidden. Please check your credentials or try logging in again.");
      } else if (status === 500) {
        alert("💥 Server error. Please try again in a moment.");
      }
    }
    return Promise.reject(error);
  }
);

// ---------------------- Auth APIs ----------------------
export const loginUser = async (email, password) => {
  const res = await API.post("/login", { email, password });
  return res.data.token;
};

export const registerUser = async (userData) => {
  const res = await API.post("/register", userData);
  return res.data;
};

export const logoutUser = async (token) => {
  await API.post("/logout", {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default API;
