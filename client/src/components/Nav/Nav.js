import React from "react";
import "./Nav.css";


const Nav = () => (
  <div className="container">
  <nav className="nav d-flex justify-content-between">

          <a className="p-2 text-muted" href="#">Lawn and Garden</a>
          <a className="p-2 text-muted" href="#">Electronics</a>
          <a className="p-2 text-muted" href="#">Home Cleaning</a>
          <a className="p-2 text-muted" href="#">Recreation</a>
          <a className="p-2 text-muted" href="#">Transportation</a>

  </nav>
  </div>
);

export default Nav;
