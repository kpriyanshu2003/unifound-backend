import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import FoundPage from "./pages/FoundPage";
import LostPage from "./pages/LostPage";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="lost" element={<LostPage />} />
          <Route path="found" element={<FoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
