import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar/Navbar.css";

function Navbar() {
    return (
        <div className="navbar__container">
            <img
                src={require("../assets/Logos/1280px-Tmdb.new.logo.svg.png")}
                alt=""
            />
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
            <img src={require("../assets/Logos/JpreetLogo.png")} alt="" />
        </div>
    );
}

export default Navbar;
