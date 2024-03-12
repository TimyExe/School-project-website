import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Adjust the import path

function NavigationMenu() {
    const { currentUser, loading, logOut } = useAuth();

    const handleLogout = async () => {
        try {
            await logOut();
            // Optionally, redirect the user to the login page or display a message
        } catch (error) {
            console.error("Failed to log out:", error);
        }
    };

    return (
        <>
            {loading ? <p>Loading...</p> : (
                <nav className="navbar">
                    <div className="container">
                        <Link to="/">
                            <img src="/ourlogo.png" alt="Logo" className="logo" />
                        </Link>
                        <div className="nav-content">
                            <ul className="nav-links">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/cart">Cart</Link></li>
                            </ul>
                            {currentUser && (
                                <>
                                    <Link to="/user">
                                        <img src={currentUser.imageUrl || "/defaultprofile.png"} alt="User Profile" className="profile-image" />
                                    </Link>
                                    <button onClick={handleLogout} className="logout-button">Log Out</button>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
}

export default NavigationMenu;
