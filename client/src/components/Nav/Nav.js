import React from "react";
import "./Nav.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";


const Nav = (props) => (
  <nav className="nav d-flex justify-content-between">

        <button onClick={()=>{props.filterBooksFunction("Lawn & Garden")}} className="btn btn-sm btn-outline-secondary align-center">Lawn and Garden</button>

        <button onClick={()=>{props.filterBooksFunction("Electronics")}} className="btn btn-sm btn-outline-secondary align-center" href="#">Electronics</button>

        <button onClick={()=>{props.filterBooksFunction("Home Cleaning")}} className="btn btn-sm btn-outline-secondary align-center" href="#">Home Cleaning</button>

        <button onClick={()=>{props.filterBooksFunction("Recreation")}} className="btn btn-sm btn-outline-secondary align-center" href="#">Recreation</button>

        <button onClick={()=>{props.filterBooksFunction("Transportation")}} className="btn btn-sm btn-outline-secondary align-center" href="#">Transportation</button>
          
  </nav>
);

export default Nav;
