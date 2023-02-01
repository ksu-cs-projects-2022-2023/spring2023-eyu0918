import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Members from "./components/pages/Members";
import ApplyNow from "./components/pages/ApplyNow";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/apply-now" element={<ApplyNow />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
