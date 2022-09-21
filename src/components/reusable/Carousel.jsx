import React from "react";
import Slider from "react-slick";
import ArrowButton from "../ArrowButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel(props) {
    const { displayItems, scrollItems } = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: displayItems,
        slidesToScroll: scrollItems,
        nextArrow: <ArrowButton direction={"right"} />,
        prevArrow: <ArrowButton direction={"left"} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <Slider {...settings}>{props.children}</Slider>
        </div>
    );
}

export default Carousel;
