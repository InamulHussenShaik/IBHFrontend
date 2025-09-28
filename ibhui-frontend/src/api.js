import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // should be http://localhost:8080/api/auth
  timeout: 5000,
});


// ---------------------- Auth APIs ----------------------
export const loginUser = async (email, password) => {
  const res = await API.post("/login", { email, password }); // use API instance
  return res.data.token; // extract token from response
};

export const registerUser = async (userData) => {
  const res = await API.post("/register", userData); // use API instance
  return res.data;
};

export const logoutUser = async (token) => {
  await API.post("/logout", {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
