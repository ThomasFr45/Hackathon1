import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/teachers">Activités</Link>
        </li>
        <li>
          <Link to="/profiles">Profil</Link>
        </li>
        <li style={{ float: "right" }}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
