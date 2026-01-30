import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerNav">
        <ul>
              <li className="navHome">
                <a href="#home">
                  <h5>Home</h5>
                </a>
              </li>
              <li className="navAbout">
                <a href="#about">
                  <h5>About</h5>
                </a>
              </li>
              <li className="navMenu">
                <a href="#menu">
                  <h5>Menu</h5>
                </a>
              </li>
              <li className="navOrder">
                <a href="#order">
                  <h5>Order</h5>
                </a>
              </li>
              <li className="navContact">
                <a href="#contact">
                  <h5>Contact</h5>
                </a>
              </li>
            </ul>
      </div>
      <div className="footNotes">2026 by Kimchily</div>
    </div>
  );
};

export default Footer;
