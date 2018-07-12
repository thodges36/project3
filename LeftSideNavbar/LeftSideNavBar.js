import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './public/left_side_navbar.js'
'use strict';

const e = React.createElement;

class SideBar extends React.Component {
    render () {
        return( 
            <div id="sidebar" class="col-xs-6 col-sm-3 sidebar-offcanvas">
            <div class="list-group">
                <a href="#" class="list-group-item">Electronics</a>
                <a href="#" class="list-group-item">Lawn & Garden</a>
                <a href="#" class="list-group-item">Home Cleaning</a>
                <a href="#" class="list-group-item">Recreation</a>
                <a href="#" class="list-group-item">Transportation</a>
    
            </div>
        </div> 
        );
    }
    }
    
const domContainer = document.querySelector('#left_side_navbar');
ReactDOM.render(e(SideBar), domContainer);s