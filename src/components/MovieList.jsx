import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import useSlickSettings from "../hooks/useSlickSettings";
import Carousel from "./reusable/Carousel";
import { settings } from "../config/slickConfig";
import Movie from "./Movie";
import "../styles/MovieList/MovieList.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MovieList(props) {
    const { movieList, contentType } = props;
    const settings = useSlickSettings({ itemsToDisplay: 4, itemsToScroll: 4 });

    return (
        <div className="movielist__container">
            <div className="movielist__cards" id="movielist">
                <Slider {...settings}>
                    {movieList &&
                        movieList.map((movie) => (
                            <Movie
                                key={movie.id}
                                movie={movie}
                                contentType={movie.media_type || contentType}
                            />
                        ))}
                </Slider>
            </div>
        </div>
    );
}

export default MovieList;
