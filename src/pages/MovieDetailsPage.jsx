import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { img500, posterUnavailable, bgOriginal } from "../config/defaultImages";
import Profile from "../components/Profile";
import GenreTag from "../components/GenreTag";
import "../styles/MovieDetails/MovieDetails.css";

function MovieDetailsPage(props) {
    const params = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [movieCast, setMovieCast] = useState([]);
    const [movieCrew, setMovieCrew] = useState([]);
    const [movieTrailer, setMovieTrailer] = useState();

    const getMovieDetails = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
        );

        setMovieDetails(response.data);
    };

    const getMovieCredits = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
        );

        setMovieCast(response.data.cast.slice(0, 5));
        setMovieCrew(response.data.crew.slice(0, 5));
    };

    const getMovieTrailer = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
        );
        setMovieTrailer(
            response.data.results.filter((video) => video.type === "Trailer")[0]
                ?.key
        );
    };

    useEffect(() => {
        getMovieDetails();
        getMovieCredits();
        getMovieTrailer();
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
                    <div className="moviedetails__rating">
                        <h3>
                            Rating:{" "}
                            {Math.round(movieDetails.vote_average * 10) / 10} /
                            10
                        </h3>
                        <p>{movieDetails.vote_count} ratings</p>
                    </div>
                </div>
                <div className="moviedetails__center">
                    <div className="moviedetails__description">
                        <h1>{movieDetails.title}</h1>
                        <p>{movieDetails.overview}</p>
                    </div>
                    <hr />
                    <div className="moviedetails__info">
                        <div className="moviedetails__stats">
                            <p>
                                Release Date:{" "}
                                <span>{movieDetails.release_date}</span>
                            </p>
                            <p>
                                Runtime:{" "}
                                <span>{movieDetails.runtime} Minutes</span>
                            </p>
                            <p>
                                Revenue: <span>${movieDetails.revenue}</span>
                            </p>
                        </div>
                        <div className="moviedetails__genres">
                            {movieDetails?.genres?.map((genre) => (
                                <GenreTag genre={genre.name} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="moviedetails__right">
                    <h3>Cast & Crew</h3>
                    <div className="moviedetails__cast-crew">
                        {movieCast &&
                            movieCast.map((profile) => (
                                <Profile key={profile.id} profile={profile} />
                            ))}
                    </div>
                </div>
            </div>
            <div className="moviedetails__trailer">
                <h1>Trailer</h1>
                <div className="trailer__container">
                    <iframe
                        src={`https://www.youtube.com/embed/${movieTrailer}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen"
                        frameborder="0"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsPage;
