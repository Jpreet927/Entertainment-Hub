import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useGenreContext } from "../context/GenreListContext";
import Movie from "../components/Movie";
import CustomPagination from "../components/reusable/Pagination";

function GenrePage() {
    const { type, id } = useParams();
    const [genreContent, setGenreContent] = useState([]);
    const [numPages, setNumPages] = useState();
    const [page, setPage] = useState(1);
    const { genreMap } = useGenreContext();

    const getGenreContent = async () => {
        let response;

        if (type === "movie") {
            response = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}&with_watch_monetization_types=flatrate`
            );
        } else {
            response = await axios.get(
                `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
            );
        }

        setNumPages(response.data.total_pages);
        setGenreContent(response.data.results);
    };

    useEffect(() => {
        getGenreContent();
    }, [page]);

    return (
        <div className="movies__container">
            <h1>{genreMap[id]}</h1>
            <div className="movies__list">
                {genreContent &&
                    genreContent.map((movie) => (
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

export default GenrePage;
