import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Filmography } from "./pages/Filmography";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ink text-neutral-100 font-sans selection:bg-gold selection:text-ink">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmography" element={<Filmography />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="py-8 border-t border-neutral-900 text-center text-neutral-600 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} Madeline Friedrich. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}
