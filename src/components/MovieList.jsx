import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { settings } from "../config/slickConfig";
import Movie from "./Movie";
import "../styles/MovieList/MovieList.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MovieList(props) {
    const { movieList } = props;

    const slideLeft = () => {
        let container = document.getElementById("movielist");
        container.scrollLeft = container.scrollLeft - 800;
    };

    const slideRight = () => {
        let container = document.getElementById("movielist");
        container.scrollLeft = container.scrollLeft + 800;
        console.log("working");
    };

    return (
        <div className="movielist__container">
            {/* <div className="movielist__buttons">
                <div className="movielist__arrow" onClick={() => slideLeft()}>
                    <ChevronLeftIcon />
                </div>
                <div className="movielist__arrow" onClick={() => slideRight()}>
                    <ChevronRightIcon />
                </div>
            </div> */}
            <div className="movielist__cards" id="movielist">
                <Slider {...settings}>
                    {movieList &&
                        movieList.map((movie) => (
                            <Movie key={movie.id} movie={movie} />
                        ))}
                </Slider>
            </div>
        </div>
    );
}

export default MovieList;
