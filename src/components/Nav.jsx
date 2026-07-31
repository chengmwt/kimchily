import React, { useEffect, useState } from "react";
import "./Nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../constants/logo_circle.webp";

/* State for burger menu open or closed ----------------------------------------------*/
const Nav = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  /* Function to set state of burger menu open or closed ------------------------------ */
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  /* Automatic closing of burger menu when scolling ------------------------------------ */
  useEffect(() => {
    let lastScrollY =
      window.scrollY; /* if scroll position changed from last position */

    const controlBurgerMenu = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY != lastScrollY) {
        setBurgerOpen(false);
      }

      lastScrollY = currentScrollY; /* Sets scroll position to current */
    };

    window.addEventListener("scroll", controlBurgerMenu);

    return () => window.removeEventListener("scroll", controlBurgerMenu);
  }, []);

  return (
    <div className="navContainer">
      <div className="nav">
        <ul>
          <li className="navHome">
            <a href="#home">Home</a> {/* Home */}
          </li>
          <li className="navAbout">
            <a href="#about">About</a> {/* About us */}
          </li>
          <li className="navMenu">
            <a href="#menu">Menu</a> {/* Menu */}
          </li>
          <li className="navOrder">
            <a href="#order">Order</a> {/* Order */}
          </li>
          <li className="navContact">
            <a href="#contact">Contact</a> {/* Contact us */}
          </li>
        </ul>
        <div id="navLogo">
          <a href="#home">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </div>

      {/* Burger menu */}
      <div className="burgerMenu">
        <div className="menuWrapper">
          <GiHamburgerMenu color="#f4e1bd" size={30} onClick={toggleBurger} />{" "}
          {/* Open and close burger menu on click */}
          <div className={`burgerList ${burgerOpen ? "burgerOpen" : ""}`}>
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
          <div id="navLogo">
            <a href="#home">
              <img src={logo} alt="logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
