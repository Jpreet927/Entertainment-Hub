import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { img300, img500, posterUnavailable } from "../config/defaultImages";
import "../styles/Movie/Movie.css";

function Movie(props) {
    const { movie } = props;
    let { id, overview, poster_path, release_date, title, name, media_type } =
        movie;

    if (media_type === undefined) {
        media_type = "movie";
    }

    return (
        <Link to={`/${media_type}/${id}`} state={{ movie: { movie } }}>
            <div className="movie__container">
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
