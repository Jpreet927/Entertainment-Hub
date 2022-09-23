import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import useSlickSettings from "../hooks/useSlickSettings";
import Carousel from "../components/reusable/Carousel";
import MovieList from "../components/MovieList";
import {
    img500,
    bg1200,
    bgOriginal,
    posterUnavailable,
} from "../config/defaultImages";
import "../styles/HomePage/HomePage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GenreTag from "../components/GenreTag";
import Trailer from "../components/Trailer";
import Avatar from "../components/Avatar";

function HomePage() {
    const [headerMovie, setHeaderMovie] = useState({});
    const [headerMovieData, setHeaderMovieData] = useState({});
    const [headerMovieTrailers, setHeaderMovieTrailers] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [popularTv, setPopularTv] = useState([]);
    const [popularActors, setPopularActors] = useState([]);
    const settings = useSlickSettings({ itemsToDisplay: 6, itemsToScroll: 6 });

    const getPopularMovies = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`
        );

        setPopularMovies(response.data.results);

        const movieData = await getHeaderMovieData(response.data.results[1].id);
        const movieTrailers = await getHeaderMovieTrailers(
            response.data.results[1].id
        );

        setHeaderMovie(movieData);
        setHeaderMovieTrailers(movieTrailers);
    };

    const getPopularTv = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`
        );

        setPopularTv(response.data.results);
    };

    const getPopularActors = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`
        );

        setPopularActors(response.data.results);
    };

    const getHeaderMovieData = async (movieID) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
        );

        return response.data;
    };

    const getHeaderMovieTrailers = async (movieID) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
        );

        return response.data.results
            .filter((video) => video.site === "YouTube")
            .map((video) => video.key)
            .slice(0, 2);
    };

    const getTrendingMovies = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API}`
        );

        setTrendingMovies(response.data.results);
    };

    useEffect(() => {
        getPopularMovies();
        getPopularTv();
        getTrendingMovies();
        getPopularActors();
    }, []);

    return (
        <div className="home__container">
            <div className="home__header">
                <div className="home__header-content">
                    <div className="home__header-details">
                        <div className="home__header-poster">
                            <img
                                src={
                                    `${img500}${headerMovie.poster_path}` ||
                                    posterUnavailable
                                }
                                alt=""
                            />
                        </div>
                        <div className="home__header-heading">
                            <h1>{headerMovie.title}</h1>
                            <div className="home__header-rating">
                                <p>
                                    Rating:{" "}
                                    <span>
                                        {Math.round(
                                            headerMovie.vote_average * 10
                                        ) / 10}{" "}
                                        / 10
                                    </span>
                                </p>
                            </div>
                            <p>{headerMovie.overview}</p>
                            <div className="headerMovie-stats">
                                <p>
                                    Release Date:{" "}
                                    <span>{headerMovie.release_date}</span>
                                </p>
                                <p>
                                    Runtime:{" "}
                                    <span>{headerMovie.runtime} Minutes</span>
                                </p>
                            </div>
                            <div className="home__header-genres">
                                {headerMovie?.genres?.map((genre) => (
                                    <GenreTag
                                        key={genre.id}
                                        genre={genre.name}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="home__header-trailers">
                        {headerMovieTrailers.map((key) => (
                            <Trailer key={key} videoId={key} />
                        ))}
                    </div>
                </div>
                <div className="home__header-vignette top"></div>
                <div className="home__header-vignette bottom"></div>
                <img src={`${bgOriginal}${headerMovie.backdrop_path}`} alt="" />
            </div>
            <div className="home__content">
                <div className="home__content-section">
                    <h1>Trending</h1>
                    <MovieList movieList={trendingMovies} contentType="both" />
                </div>
                <div className="home__content-section">
                    <h1>Popular Movies</h1>
                    <MovieList movieList={popularMovies} contentType="movie" />
                </div>
                <div className="home__content-section">
                    <h1>Popular TV Shows</h1>
                    <MovieList movieList={popularTv} contentType="tv" />
                </div>
                <div className="home__content-section">
                    <h1>Trending Actors</h1>
                    <div className="home__content-actors">
                        <Slider {...settings}>
                            {popularActors.map((actor) => (
                                <Avatar key={actor.id} actor={actor} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
