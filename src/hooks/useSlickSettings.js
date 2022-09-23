function useSlickSettings({ itemsToDisplay, itemsToScroll }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: itemsToDisplay,
        slidesToScroll: itemsToScroll,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: itemsToDisplay > 1 ? itemsToDisplay - 1 : 1,
                    slidesToScroll: itemsToScroll > 1 ? itemsToScroll - 1 : 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: itemsToDisplay > 2 ? itemsToDisplay - 2 : 1,
                    slidesToScroll: itemsToScroll > 2 ? itemsToScroll - 2 : 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: itemsToDisplay > 3 ? itemsToDisplay - 3 : 1,
                    slidesToScroll: itemsToScroll > 3 ? itemsToScroll - 3 : 1,
                },
            },
        ],
    };

    return settings;
}

export default useSlickSettings;
