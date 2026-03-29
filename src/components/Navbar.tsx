import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

export const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed top-0 left-0 w-full z-50 bg-ink/80 backdrop-blur-md border-b border-neutral-900"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl tracking-wide hover:text-gold transition-colors">
          MF.
        </Link>
        <div className="flex gap-8 text-sm uppercase tracking-widest font-medium">
          <Link 
            to="/" 
            className={`hover:text-gold transition-colors ${location.pathname === '/' ? 'text-gold' : 'text-neutral-400'}`}
          >
            Home
          </Link>
          <Link 
            to="/filmography" 
            className={`hover:text-gold transition-colors ${location.pathname === '/filmography' ? 'text-gold' : 'text-neutral-400'}`}
          >
            Filmography
          </Link>
          <Link 
            to="/contact" 
            className={`hover:text-gold transition-colors ${location.pathname === '/contact' ? 'text-gold' : 'text-neutral-400'}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};
