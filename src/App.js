import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Members from "./components/pages/Members";
import ApplyToday from "./components/pages/ApplyToday";
import Values from "./components/pages/Values";
import Operations from "./components/pages/Operations";
import Activities from "./components/pages/Activities";
import Costs from "./components/pages/Costs";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/apply-today" element={<ApplyToday />} />
          <Route path="/values" element={<Values />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/costs" element={<Costs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
