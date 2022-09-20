import axios from "axios";
import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import CustomPagination from "../components/Pagination";
import "../styles/MoviesPage/MoviesPage.css";

function MoviesPage() {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [numPages, setNumPages] = useState();

    const getAllMovies = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
        );

        console.log(response.data);
        setMovies(response.data.results);
        setNumPages(response.data.total_pages);
    };

    useEffect(() => {
        getAllMovies();
    }, [page]);

    return (
        <div className="movies__container">
            <div className="movies__list">
                {movies &&
                    movies.map((movie) => (
                        <Movie key={movie.id} movie={movie} />
                    ))}
            </div>
            <CustomPagination setPage={setPage} numOfPages={numPages} />
        </div>
    );
}

export default MoviesPage;
