import React from "react";
import "./styles/globalStyles.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import Profile from './Pages/Profile'
import Resume from './Pages/Resume'
import Portfolio from './Pages/Portfolio'
import Services from './Pages/Services'
import Contact from './Pages/Contact'

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<Resume />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;
