import React from "react";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1>Doughvia</h1>
        </div>

        <ul className="navLinks">
          <li> <a href="#"></a>Home</li>
          <li>About Us</li>
          <li>Menu</li>
          <li>Moments</li>
          <li>Contact Us</li>
          <button>Order Now</button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
