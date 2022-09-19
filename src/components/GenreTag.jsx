import React, { useEffect } from "react";
import "../styles/GenreTag/GenreTag.css";

function GenreTag(props) {
    const { genre } = props;

    useEffect(() => {
        console.log(genre);
    }, []);

    return (
        <div className="genre__container">
            <p>{genre}</p>
        </div>
    );
}

export default GenreTag;
