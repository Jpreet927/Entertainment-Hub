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
                                (company, index) => {
                                    if (
                                        index ===
                                        contentDetails.production_companies
                                            .length -
                                            1
                                    ) {
                                        return company.name;
                                    } else {
                                        return company.name + ", ";
                                    }
                                }
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
                            {contentDetails?.networks?.map((network, index) => {
                                if (
                                    index ===
                                    contentDetails.networks.length - 1
                                ) {
                                    return network.name;
                                } else {
                                    console.log(index);
                                    console.log(contentDetails.networks.length);
                                    return network.name + ", ";
                                }
                            })}
                        </span>
                    </p>
                </div>
            )}
        </>
    );
}

export default Details;
