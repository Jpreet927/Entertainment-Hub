import React from "react";
import { Link } from "react-router-dom";
import { avatar45, avatar185 } from "../config/defaultImages";
import "../styles/Profile/Profile.css";

function Profile(props) {
    const { profile } = props;

    return (
        <Link to={`/actor/${profile.id}`} style={{ textDecoration: "none" }}>
            <div className="profile__container">
                <div className="profile__avatar">
                    <img src={`${avatar185}${profile.profile_path}`} alt="" />
                </div>
                <div className="profile__name">
                    <h3>{profile.name}</h3>
                    <p>{profile.character}</p>
                </div>
            </div>
        </Link>
    );
}

export default Profile;
