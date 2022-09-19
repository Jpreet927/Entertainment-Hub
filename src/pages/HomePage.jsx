import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import { bg1200, bgOriginal } from "../config/defaultImages";
import "../styles/HomePage/HomePage.css";

function HomePage() {
    const [headerMovie, setHeaderMovie] = useState({});
    const [popularMovies, setPopularMovies] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);

    const getPopularMovies = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`
        );

        setPopularMovies(response.data.results);
        setHeaderMovie(response.data.results[0]);
    };

    const getTrendingMovies = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API}`
        );

        setTrendingMovies(response.data.results);
    };

    useEffect(() => {
        getPopularMovies();
        getTrendingMovies();
    }, []);

    return (
        <div className="home__container">
            <div className="home__header">
                <div className="home__header-details">
                    <div className="home__header-heading">
                        <h1>{headerMovie.title}</h1>
                        <div className="home__header-stats">
                            <p>{headerMovie.vote_average} / 10</p>
                        </div>
                    </div>
                    <p>{headerMovie.overview}</p>
                </div>
                <div className="home__header-vignette top"></div>
                <div className="home__header-vignette bottom"></div>
                <img src={`${bgOriginal}${headerMovie.backdrop_path}`} alt="" />
            </div>
            <div className="home__content">
                <div className="home__content-trending">
                    <h1>Trending</h1>
                    <MovieList movieList={trendingMovies} />
                </div>
                <div className="home__content-popular">
                    <h1>Popular</h1>
                    <MovieList movieList={popularMovies} />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
