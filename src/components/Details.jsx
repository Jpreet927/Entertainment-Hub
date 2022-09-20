import React from "react";
import { logo92 } from "../config/defaultImages";
import "../styles/Details/Details.css";

function Details(props) {
    const { contentDetails, type } = props;
    return (
        <>
            {type === "movie" ? (
                <div>
                    <p>
                        Release Date: <span>{contentDetails.release_date}</span>
                    </p>

                    <p>
                        Runtime: <span>{contentDetails.runtime} Minutes</span>
                    </p>
                    <p>
                        Production:{" "}
                        <span>
                            {contentDetails?.production_companies?.map(
                                (company) => company.name + ", "
                            )}
                        </span>
                    </p>
                </div>
            ) : (
                <div>
                    <p>
                        Release Date:{" "}
                        <span>{contentDetails.first_air_date}</span>
                    </p>

                    <p>
                        Number of Episodes:{" "}
                        <span>{contentDetails.number_of_episodes}</span>
                    </p>
                    <p>
                        Networks:{" "}
                        <span>
                            {contentDetails?.networks?.map(
                                (network) => network.name + ", "
                            )}
                        </span>
                    </p>
                </div>
            )}
        </>
    );
}

export default Details;
