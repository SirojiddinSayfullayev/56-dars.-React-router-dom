import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.css";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./layouts/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<App />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<h2>Login page</h2>} />
        <Route path="/register" element={<h2>Registr page</h2>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
