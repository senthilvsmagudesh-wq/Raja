import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import Home from "./pages/Home";
import About from "./pages/About";
import Doctor from "./pages/Doctor";
import Services from "./pages/Services";
import Staff from "./pages/Staff";
import PatientInfo from "./pages/PatientInfo";
import Contact from "./pages/Contact";
import Updates from "./pages/Updates";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/services" element={<Services />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/patient-info" element={<PatientInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/updates" element={<Updates />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
