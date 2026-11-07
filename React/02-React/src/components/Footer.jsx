import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <h1>FAUNA</h1>
          <p>One planet. Countless stories.</p>
        </div>

        {/* Explore */}
        <div className="footer-links">
          <h3>Explore</h3>

          <Link to="/animals">Animals</Link>
          <Link to="/reptiles">Reptiles</Link>
          <Link to="/birds">Birds</Link>
          <Link to="/marine">Marine</Link>
        </div>

        {/* About */}
        <div className="footer-about">
          <h3>About</h3>

          <p>
            A visual exploration of wildlife, nature, and the creatures that
            shape our planet.
          </p>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h3>Connect</h3>

          <a href="https://github.com/Pranab0104" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/pranav-mandal-b5554a23b/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 FAUNA</p>

        <p>Designed & Developed by Pranav</p>

        <Link to="/" className="back-top">
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
