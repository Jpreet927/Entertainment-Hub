import React, { useEffect } from "react";
import "../styles/GenreTag/GenreTag.css";

function GenreTag(props) {
    const { genre } = props;

    return (
        <div className="genre__container">
            <p>{genre}</p>
        </div>
    );
}

export default GenreTag;
