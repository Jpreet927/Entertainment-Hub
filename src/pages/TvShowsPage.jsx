import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import CustomPagination from "../components/reusable/Pagination";
import Search from "../components/Search";
import "../styles/MoviesPage/MoviesPage.css";

function TvShowsPage() {
    const [page, setPage] = useState(1);
    const [shows, setShows] = useState([]);
    const [searchedShows, setSearchedShows] = useState([]);
    const [numPages, setNumPages] = useState();
    const [searchParams, setSearchParams] = useState("");

    const getAllShows = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
        );

        console.log(response.data);
        setShows(response.data.results);
        setSearchedShows(response.data.results);
        setNumPages(response.data.total_pages);
    };

    const getSearchedShows = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&query=${searchParams}&page=${page}&include_adult=false`
        );
        setNumPages(response.data.total_pages);
        setSearchedShows(response.data.results);
    };

    useEffect(() => {
        getAllShows();
    }, [page]);

    useEffect(() => {
        if (searchParams === "") {
            getAllShows();
        }
    }, [searchParams]);

    return (
        <div className="movies__container">
            <Search
                setSearchParams={setSearchParams}
                executeSearch={getSearchedShows}
            />
            <div className="movies__list">
                {searchedShows &&
                    searchedShows.map((show) => (
                        <Movie key={show.id} movie={show} contentType={"tv"} />
                    ))}
            </div>
            <CustomPagination setPage={setPage} numOfPages={numPages} />
        </div>
    );
}

export default TvShowsPage;
