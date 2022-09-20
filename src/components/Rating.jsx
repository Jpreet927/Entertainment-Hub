import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles/Rating/Rating.css";

function Rating(props) {
    const { average, count } = props;
    return (
        <div className="rating__container">
            <div className="rating__progressbar-container">
                <CircularProgressbar
                    className="rating__progressbar"
                    value={Math.round(average * 10)}
                    text={Math.round(average * 10) / 10}
                    strokeWidth={8}
                    styles={buildStyles({
                        strokeLinecap: "butt",
                        pathColor: "#8af3b2",
                        textColor: "#ffffff",
                        trailColor: "#121317",
                        textSize: "18px",
                    })}
                />
            </div>
            <p>
                <span>{count}</span> ratings
            </p>
        </div>
    );
}

export default Rating;
