"use client";

import React from "react";
import "./footer.css";
import { Link } from "react-scroll";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-contact"></div>
        <div className="footer-links">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="footer-link"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="footer-link"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="footer-link"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contact" // Ensure this matches the section ID
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="footer-link"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright ⓒ {year} Taher Selim. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
