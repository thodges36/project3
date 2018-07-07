import React from "react";
import "./Header.css";

const Header = () => (

<div className="container">
<header className="blog-header py-3">
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-4 pt-1">
        <a className="text-muted" href="/list">List an Item</a>
      </div>
      <div className="col-4 text-center" id="header-logo">
        <a className="blog-header-logo text-dark" href="/">Rental Central</a>
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
        <a className="btn btn-sm btn-outline-secondary" href="#">Log In</a>
      </div>
    </div>
  </header>
</div>
);

export default Header;
