import axios from "axios";
import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import CustomPagination from "../components/reusable/Pagination";
import Search from "../components/Search";
import "../styles/MoviesPage/MoviesPage.css";

function MoviesPage() {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [numPages, setNumPages] = useState();
    const [searchParams, setSearchParams] = useState("");

    const getAllMovies = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
        );

        setMovies(response.data.results);
        setSearchedMovies(response.data.results);
        setNumPages(response.data.total_pages);
    };

    const getSearchedMovies = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&query=${searchParams}&page=${page}&include_adult=false`
        );
        setNumPages(response.data.total_pages);
        setSearchedMovies(response.data.results);
    };

    // ensure search query is persisted after pagination
    useEffect(() => {
        if (searchParams === "") {
            getAllMovies();
        } else {
            getSearchedMovies();
        }
    }, [page]);

    // automatically show all content if user deletes their search query
    useEffect(() => {
        if (searchParams === "") {
            getAllMovies();
        }
    }, [searchParams]);

    return (
        <div className="movies__container">
            <Search
                setSearchParams={setSearchParams}
                executeSearch={getSearchedMovies}
            />
            <div className="movies__list">
                {searchedMovies &&
                    searchedMovies.map((movie) => (
                        <Movie
                            key={movie.id}
                            movie={movie}
                            contentType={"movie"}
                        />
                    ))}
            </div>
            <CustomPagination setPage={setPage} numOfPages={numPages} />
        </div>
    );
}

export default MoviesPage;
