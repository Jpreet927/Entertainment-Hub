import React from "react";
import { avatar185 } from "../config/defaultImages";
import "../styles/Avatar/Avatar.css";

function Avatar(props) {
    const { actor } = props;

    return (
        <div className="actor__container">
            <div className="actor__picture">
                <img src={`${avatar185}${actor.profile_path}`} alt="" />
            </div>
            <div className="actor__info">
                <p>{actor.name}</p>
            </div>
        </div>
    );
}

export default Avatar;
