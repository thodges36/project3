import React from "react";
import "./Header.css";


const Header = () => (
  <header className="blog-header py-3">
    <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1">
            <a className="text-muted" href="#">
        List Item
            </a>
        </div>
        <div className="col-4 text-center">
            <a className="blog-header-logo text-dark" href="/">
        Rent a Center
            </a>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="btn btn-sm btn-outline-secondary" href="#">
        Sign up
            </a>
        </div>
    </div>
  </header>
);

export default Header;
