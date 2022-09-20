import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar/Navbar.css";

function Navbar() {
    const [activeTab, setActiveTab] = useState("Home");
    const [navbarBackground, setNavbarBackground] = useState(false);

    const toggleBackground = () => {
        if (window.scrollY > 720) {
            setNavbarBackground(true);
        } else {
            setNavbarBackground(false);
        }
    };

    window.addEventListener("scroll", toggleBackground);

    return (
        <div
            className={
                navbarBackground === true
                    ? "navbar__container navbar__background"
                    : "navbar__container"
            }
        >
            <img
                src={require("../assets/Logos/1280px-Tmdb.new.logo.svg.png")}
                alt=""
            />
            <ul>
                <Link
                    to="/"
                    style={{ textDecoration: "none" }}
                    onClick={() => setActiveTab("Home")}
                >
                    <li
                        className={activeTab === "Home" ? "navbar__active" : ""}
                    >
                        Home
                    </li>
                </Link>
                <Link
                    to="/movies"
                    style={{ textDecoration: "none" }}
                    onClick={() => setActiveTab("All Movies")}
                >
                    <li
                        className={
                            activeTab === "All Movies" ? "navbar__active" : ""
                        }
                    >
                        All Movies
                    </li>
                </Link>
                <Link
                    to="/search"
                    style={{ textDecoration: "none" }}
                    onClick={() => setActiveTab("Search")}
                >
                    <li
                        className={
                            activeTab === "Search" ? "navbar__active" : ""
                        }
                    >
                        Search
                    </li>
                </Link>
            </ul>
            <img src={require("../assets/Logos/JpreetLogo.png")} alt="" />
        </div>
    );
}

export default Navbar;
