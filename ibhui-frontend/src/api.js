import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // e.g., http://localhost:8080/api
  timeout: 5000, // 5 seconds
});

// ---------------------- Auth APIs ----------------------

// Login user
export const loginUser = async (email, password) => {
  try {
    const { data } = await API.post("/auth/login", { email, password });

    // Handle backend error responses
    if (data === "User not found" || data === "Invalid password") {
      throw new Error(data);
    }

    return data; // token
  } catch (error) {
    throw new Error(error.response?.data || error.message || "Login failed");
  }
};

// Logout user
export const logoutUser = async (token) => {
  try {
    const { data } = await API.post(
      "/auth/logout",
      null,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    throw new Error(error.response?.data || error.message || "Logout failed");
  }
};

// Register new user
export const registerUser = async (payload) => {
  try {
    const { data } = await API.post("/auth/register", payload);

    // Backend returns string messages like "Email already exists" or "User registered successfully"
    if (data === "Email already exists" || data === "Passwords do not match") {
      throw new Error(data);
    }

    return data; // success message
  } catch (error) {
    throw new Error(error.response?.data || error.message || "Registration failed");
  }
};
