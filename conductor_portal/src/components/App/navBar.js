import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';
export default function NavBar() {

        return (
        <nav role='navigation'>
               <div id='menuToggle'>
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <li className='nav-link'><NavLink to='/reports'>Reports</NavLink></li>
                    <li className='nav-link'><NavLink to='/dashboard'>Dashboard</NavLink></li>
                </ul>
            </div>
        </nav>
        );
    }
