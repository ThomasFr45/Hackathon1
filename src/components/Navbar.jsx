import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/teachers">Activités</Link>
        </li>
        <li style={{ float: "right" }}>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
