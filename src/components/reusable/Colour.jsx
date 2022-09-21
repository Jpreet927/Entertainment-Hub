import React from "react";
import { ColorExtractor } from "react-color-extractor";

function Colour(props) {
    const { imagePath, setColor } = props;

    return (
        <div>
            <ColorExtractor
                src={imagePath}
                getColors={(colors) => setColor(colors)}
            />
        </div>
    );
}

export default Colour;
