import React from "react";
import "../styles/Trailer/Trailer.css";

function Trailer(props) {
    const { videoId } = props;

    return (
        <div className="trailer__container">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen"
                frameborder="0"
            ></iframe>
        </div>
    );
}

export default Trailer;
