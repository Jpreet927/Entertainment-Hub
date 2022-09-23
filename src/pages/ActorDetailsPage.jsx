import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
    bgOriginal,
    avatar185,
    avatar300,
    socialMedia,
} from "../config/defaultImages";
import MovieList from "../components/MovieList";
import "../styles/ActorDetails/ActorDetails.css";

function ActorDetailsPage() {
    const params = useParams();
    const [actorDetails, setActorDetails] = useState({});
    const [actorCredits, setActorCredits] = useState([]);
    const [actorSocials, setActorSocials] = useState({});
    const [actorSocialKeys, setActorSocialKeys] = useState([]);

    const getActorDetails = async () => {
        let response = await axios.get(
            `https://api.themoviedb.org/3/person/${params.id}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
        );

        setActorDetails(response.data);
    };

    const getActorCredits = async () => {
        let response = await axios.get(
            `https://api.themoviedb.org/3/person/${params.id}/combined_credits?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
        );

        setActorCredits(response.data);
    };

    const getActorSocials = async () => {
        let response = await axios.get(
            `https://api.themoviedb.org/3/person/${params.id}/external_ids?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
        );

        setActorSocials(response.data);
        setActorSocialKeys(
            Object.keys(response.data).filter((item) => {
                if (response.data[item] !== null && item !== "id") {
                    return item;
                }
            })
        );
    };

    useEffect(() => {
        getActorDetails();
        getActorCredits();
        getActorSocials();
    }, []);

    return (
        <div className="actor__background">
            <div className="actor__header">
                <div className="actor__avatar">
                    <img
                        src={`${avatar300}${actorDetails.profile_path}`}
                        alt=""
                    />
                </div>
                <div className="actor__name">
                    <h1>{actorDetails.name}</h1>
                </div>
            </div>
            <div className="actor__info">
                <h1>Biography</h1>
                <div className="actor__biography">
                    <div>
                        <p>{actorDetails.biography}</p>
                        <div className="actor__bio-socials">
                            {actorSocialKeys
                                .filter((item) =>
                                    socialMedia.hasOwnProperty(item)
                                )
                                .map((item) => {
                                    <div>
                                        <p>yerr</p>
                                    </div>;
                                })}
                        </div>
                    </div>
                    <div className="actor__biography-details">
                        <p>
                            Birthday: <span>{actorDetails.birthday}</span>
                        </p>
                        <p>
                            Birthplace:{" "}
                            <span>{actorDetails.place_of_birth}</span>
                        </p>
                        <p>
                            Gender:{" "}
                            <span>
                                {actorDetails.gender === 2 ? "Male" : "Female"}
                            </span>
                        </p>
                        <p>
                            Known For:{" "}
                            <span>{actorDetails.known_for_department}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="actor__info">
                <h1>Known For</h1>
                <MovieList movieList={actorCredits?.cast?.slice(0, 12)} />
            </div>
        </div>
    );
}

export default ActorDetailsPage;
