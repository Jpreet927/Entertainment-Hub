import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PersonIcon from "@mui/icons-material/Person";
import "../styles/Footer/Footer.css";

function Footer() {
    return (
        <div className="footer__container">
            <div className="footer__left">
                <p>Created by</p>
                <h3>Jai Preet Singh</h3>
            </div>
            <div className="footer__right">
                <a
                    href="https://www.linkedin.com/in/jaipreetsingh/"
                    target="_blank"
                >
                    <LinkedInIcon className="footer__icon" />
                </a>
                <a href="https://github.com/Jpreet927" target="_blank">
                    <GitHubIcon className="footer__icon" />
                </a>
                <a href="https://jaipreet.ca/" target="_blank">
                    <PersonIcon className="footer__icon" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
