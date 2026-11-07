import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navigation absolute top-0 left-0 z-20 w-full flex items-center justify-between">

      {/* Logo */}
      <Link
        to="/"
        className="logo text-2xl font-bold"
        onClick={closeMenu}
      >
        Fauna
      </Link>

      {/* Desktop Navigation */}
      <div className="nav-links">
        <Link
          to="/animals"
          onClick={closeMenu}
          className="underline decoration-transparent underline-offset-8 hover:decoration-[#d97b4a] transition-all duration-300"
        >
          ANIMALS
        </Link>

        <Link
          to="/reptiles"
          onClick={closeMenu}
          className="underline decoration-transparent underline-offset-8 hover:decoration-[#d97b4a] transition-all duration-300"
        >
          REPTILES
        </Link>

        <Link
          to="/birds"
          onClick={closeMenu}
          className="underline decoration-transparent underline-offset-8 hover:decoration-[#d97b4a] transition-all duration-300"
        >
          BIRDS
        </Link>

        <Link
          to="/marine"
          onClick={closeMenu}
          className="underline decoration-transparent underline-offset-8 hover:decoration-[#d97b4a] transition-all duration-300"
        >
          MARINE
        </Link>
      </div>

      {/* Hamburger Button */}
      <button
        className={`menu-btn ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/animals" onClick={closeMenu}>
          ANIMALS
        </Link>

        <Link to="/reptiles" onClick={closeMenu}>
          REPTILES
        </Link>

        <Link to="/birds" onClick={closeMenu}>
          BIRDS
        </Link>

        <Link to="/marine" onClick={closeMenu}>
          MARINE
        </Link>
      </div>

    </nav>
  );
};

export default Nav;