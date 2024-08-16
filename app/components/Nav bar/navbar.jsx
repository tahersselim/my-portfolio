"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [showmenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <Image src="/taher-selim.png" alt="logo" className="logo" width={50} height={50} />
        <div className="desktopmenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            Home
          </Link>
          <Link
            className="desktopMenuListItem"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            About
          </Link>
          <Link
            className="desktopMenuListItem"
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Portfolio
          </Link>
        </div>
        <button
          className="desktopMenuBtn"
          onClick={() => {
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact Me
        </button>

        <Image
          src="/menu.png"
          alt="menu"
          className="mobmenu"
          width={30}
          height={30}
          onClick={() => setShowMenu(!showmenu)}
        />
        <div
          className="navmenu"
          style={{ display: showmenu ? "flex" : "none" }}
        >
          <Link
            to="intro"
            smooth={true}
            offset={-50}
            duration={500}
            className="ListItem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            className="ListItem"
            to="skills"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            className="ListItem"
            to="works"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Portfolio
          </Link>
          <Link
            className="ListItem"
            to="contact"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Contact Me
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
