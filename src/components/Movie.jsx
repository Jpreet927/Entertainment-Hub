import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { img300, img500, posterUnavailable } from "../config/defaultImages";
import { ColorExtractor } from "react-color-extractor";
import Colour from "./reusable/Colour";
import "../styles/Movie/Movie.css";

function Movie(props) {
    const { movie, contentType } = props;
    const [shadowColour, setShadowColour] = useState("");
    let { id, overview, poster_path, release_date, title, name, media_type } =
        movie;

    if (media_type === undefined) {
        media_type = "movie";
    }

    let shadow = {
        boxShadow: `0px 10px 20px ${shadowColour}30`,
    };

    return (
        <Link to={`/${contentType}/${id}`} state={{ movie: { movie } }}>
            <ColorExtractor
                src={`${img300}${poster_path}`}
                getColors={(colors) => setShadowColour(colors[0])}
            />
            <div className="movie__container" style={shadow}>
                <div className="movie__info">
                    <div className="movie__vignette"></div>
                    <div className="movie__details">
                        <h3>{title || name}</h3>
                        <p>{overview}</p>
                    </div>
                </div>
                <img
                    src={`${img500}${poster_path}` || posterUnavailable}
                    alt=""
                />
            </div>
        </Link>
    );
}

export default Movie;
