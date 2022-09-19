import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import {
    img300,
    img500,
    posterUnavailable,
    bgOriginal,
} from "../config/defaultImages";
import "../styles/MovieDetails/MovieDetails.css";

function MovieDetailsPage(props) {
    const { movie } = props;
    const location = useLocation();
    const params = useParams();
    const [movieDetails, setMovieDetails] = useState({});

    const getMovieDetails = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
        );

        setMovieDetails(response.data);
    };

    useEffect(() => {
        getMovieDetails();
    }, []);

    return (
        <div className="moviedetails__container">
            <div className="moviedetails__header">
                <div className="moviedetails__header-vignette top"></div>
                <div className="moviedetails__header-vignette bottom"></div>
                <img
                    src={`${bgOriginal}${movieDetails.backdrop_path}`}
                    alt=""
                />
            </div>
            <div className="moviedetails__details">
                <div className="moviedetails__left">
                    <img
                        src={
                            `${img500}${movieDetails.poster_path}` ||
                            posterUnavailable
                        }
                        alt=""
                    />
                </div>
                <div className="moviedetails__center">
                    <h1>{movieDetails.title}</h1>
                    <p>{movieDetails.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsPage;
