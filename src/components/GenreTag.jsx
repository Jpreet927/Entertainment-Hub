import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/GenreTag/GenreTag.css";

function GenreTag(props) {
    const { id, genre, contentType } = props;

    return (
        <Link
            to={`/${contentType}/genre/${id}`}
            style={{ textDecoration: "none" }}
        >
            <div className="genre__container">
                <p>{genre}</p>
            </div>
        </Link>
    );
}

export default GenreTag;
