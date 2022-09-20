import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import "../styles/ArrowButton/ArrowButton.css";

function ArrowButton(props) {
    const { direction, className, style, onClick } = props;

    return (
        <div
            className={`arrow__container ${className}`}
            style={{
                ...style,
                display: "block",
                // background: "green",
            }}
            onClick={onClick}
        />
    );
}

export default ArrowButton;
