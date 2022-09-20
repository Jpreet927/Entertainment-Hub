import React from "react";
import "../styles/Rating/Rating.css";

function Rating(props) {
    const { average, count } = props;
    return (
        <div className="rating__container">
            <h3>Rating: {Math.round(average * 10) / 10} / 10</h3>
            <p>{count} ratings</p>
        </div>
    );
}

export default Rating;
