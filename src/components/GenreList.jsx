import React, { useEffect, useState } from "react";
import { useGenreContext } from "../context/GenreListContext";
import GenreTag from "./GenreTag";
import "../styles/GenreList/GenreList.css";

function GenreList(props) {
    const { contentType, genres } = props;
    const { genreMap, setGenreMap } = useGenreContext();

    const reduceGenres = (genres) => {
        let genresObj = genres.reduce(
            (map, genre) => ((map[genre.id] = genre.name), map),
            {}
        );
        return genresObj;
    };

    useEffect(() => {
        if (genres) {
            let genresCopy = genres;
            let genresReduced = reduceGenres(genresCopy);

            setGenreMap({
                ...genreMap,
                ...genresReduced,
            });
        }
    }, [genres]);

    return (
        <div className="genrelist__container">
            {genres.map((genre) => (
                <GenreTag
                    key={genre.id}
                    id={genre.id}
                    genre={genre.name}
                    contentType={contentType}
                />
            ))}
        </div>
    );
}

export default GenreList;
