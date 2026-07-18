import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Nav from "./assets/Nav.jsx";
import Home from "./assets/Home.jsx";

createRoot(document.getElementById("root")).render(
  <div>
    <App />
    <Nav />
    <Home/>
  </div>,
);
