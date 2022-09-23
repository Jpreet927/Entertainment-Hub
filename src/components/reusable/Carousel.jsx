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
                breakpoint: 1500,
                settings: {
                    slidesToShow: displayItems > 1 ? displayItems - 1 : 1,
                    slidesToScroll: scrollItems > 1 ? scrollItems - 1 : 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: displayItems > 2 ? displayItems - 2 : 1,
                    slidesToScroll: scrollItems > 2 ? scrollItems - 2 : 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: displayItems > 3 ? displayItems - 3 : 1,
                    slidesToScroll: scrollItems > 3 ? scrollItems - 3 : 1,
                },
            },
        ],
    };

    return (
        <div style={{ padding: "1em 0em" }}>
            <Slider {...settings}>{props.children}</Slider>
        </div>
    );
}

export default Carousel;
