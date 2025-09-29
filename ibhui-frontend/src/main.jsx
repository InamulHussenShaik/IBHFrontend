import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './index.css'; // your global CSS
import './stylesheets/login.css'; // your custom login CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
