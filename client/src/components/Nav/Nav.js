import React from "react";
import "./Nav.css";


const Nav = () => (
  <nav className="navbar transparent navbar-inverse navbar-fixed-top">
    <a className="navbar-brand" href="/">
      Rent a Center
    </a>
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#">Sign Up</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Log In</a>
  </li>
</ul>
  </nav>
);

export default Nav;
