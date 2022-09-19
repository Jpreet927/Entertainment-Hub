import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import "../styles/MovieList/MovieList.css";

function MovieList(props) {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const { movieList } = props;

    const getTrendingMovies = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API}`
        );
        console.log(response.data.results);
        setTrendingMovies(response.data.results);
    };

    useEffect(() => {
        getTrendingMovies();
    }, []);

    return (
        <div className="movielist__container">
            {movieList &&
                movieList.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
        </div>
    );
}

export default MovieList;
