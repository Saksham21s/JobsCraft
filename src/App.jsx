import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/LandingPage";
import Builder from "./components/ResumeBuilderPage";
import "./styles/App.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<Builder/>} />
      </Routes>
    </Router>
  );
};

export default App;
