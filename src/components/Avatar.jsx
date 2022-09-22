import React from "react";
import { Link } from "react-router-dom";
import { avatar185 } from "../config/defaultImages";
import "../styles/Avatar/Avatar.css";

function Avatar(props) {
    const { actor } = props;

    return (
        <Link to={`actor/${actor.id}`} style={{ textDecoration: "none" }}>
            <div className="actor__container">
                <div className="actor__picture">
                    <img src={`${avatar185}${actor.profile_path}`} alt="" />
                </div>
                <div className="actor__info">
                    <p>{actor.name}</p>
                </div>
            </div>
        </Link>
    );
}

export default Avatar;
