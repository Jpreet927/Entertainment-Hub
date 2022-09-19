import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar/Navbar.css";

function Navbar() {
    return (
        <div className="navbar__container">
            <ul>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <li>Home</li>
                </Link>
                <Link to="/movies" style={{ textDecoration: "none" }}>
                    <li>All Movies</li>
                </Link>
                <Link to="/search" style={{ textDecoration: "none" }}>
                    <li>Search</li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;
