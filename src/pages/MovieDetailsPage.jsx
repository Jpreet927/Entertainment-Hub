import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { img500, posterUnavailable, bgOriginal } from "../config/defaultImages";
import Profile from "../components/Profile";
import GenreTag from "../components/GenreTag";
import Details from "../components/Details";
import "../styles/MovieDetails/MovieDetails.css";
import Trailer from "../components/Trailer";
import Rating from "../components/Rating";
import MovieList from "../components/MovieList";

function MovieDetailsPage(props) {
    const params = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [movieCast, setMovieCast] = useState([]);
    const [movieCrew, setMovieCrew] = useState([]);
    const [movieTrailer, setMovieTrailer] = useState();
    const [movieRelated, setMovieRelated] = useState([]);

    const getMovieDetails = async () => {
        let response;

        response = await axios.get(
            `https://api.themoviedb.org/3/${params.type}/${params.id}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
        );

        setMovieDetails(response.data);
    };

    const getMovieCredits = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/${params.type}/${params.id}/credits?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
        );

        setMovieCast(response.data.cast.slice(0, 5));
        setMovieCrew(response.data.crew.slice(0, 5));
    };

    const getMovieTrailer = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/${params.type}/${params.id}/videos?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
        );

        setMovieTrailer(
            response.data.results.filter((video) => video.type === "Trailer")[0]
                ?.key
        );
    };

    const getMovieRelated = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/${params.type}/${params.id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`
        );
        setMovieRelated(response.data.results);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        getMovieDetails();
        getMovieCredits();
        getMovieTrailer();
        getMovieRelated();
    }, [params.id]);

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
                        <Rating
                            average={movieDetails.vote_average}
                            count={movieDetails.vote_count}
                        />
                    </div>
                </div>
                <div className="moviedetails__center">
                    <div className="moviedetails__description">
                        <h1>{movieDetails.title || movieDetails.name}</h1>
                        <p>{movieDetails.overview}</p>
                    </div>
                    <hr />
                    <div className="moviedetails__info">
                        <div className="moviedetails__stats">
                            <Details
                                contentDetails={movieDetails}
                                type={params.type}
                            />
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
                <Trailer videoId={movieTrailer} />
            </div>
            <div className="moviedetails__related">
                <h1>Related</h1>
                <MovieList movieList={movieRelated} contentType={params.type} />
            </div>
        </div>
    );
}

export default MovieDetailsPage;
