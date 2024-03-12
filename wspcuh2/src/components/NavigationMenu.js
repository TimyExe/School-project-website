import React from 'react';
import { Link } from "react-router-dom";

function NavigationMenu() {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/">
                    <img src="/ourlogo.png" alt="Logo" className="logo" />
                </Link>
                <ul className="nav-links">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/user">User</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavigationMenu;
