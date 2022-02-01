import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import Login from "./pages/login/login";
export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
