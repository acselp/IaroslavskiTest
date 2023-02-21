import "./CustomCarousel.scss";
import Slider from 'react-slick';
import './slick.scss';
import './slick-theme.scss';
// import SliderArrow from "../SvgComponents/SliderArrow";
import PrevArrow from "../SvgComponents/PrevArrow";
import NextArrow from "../SvgComponents/NextArrow";
import { useRef, useState, useEffect } from "react";
import { COLORS } from "../../values/colors";


function CustomCarousel(props) {

    let arrowRef = useRef(null);

    let [sliderPosition, setSliderPosition] = useState(0);
    // let [nrSlides, setNrSlides] = useState(props.nrSlides);

    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 0.97,
        slidesToScroll: 1,
        class: "center",
        centerMode: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
    };


    function prev() {
        arrowRef.current.slickPrev();


        if(sliderPosition > 0) {
            setSliderPosition(sliderPosition - (100 / props.nrSlides));
        }
        else {
            setSliderPosition(100 - (100 / props.nrSlides));
        }
    }

    function next() {
        arrowRef.current.slickNext();

        if(sliderPosition < (100 - (100 / props.nrSlides))) {
            setSliderPosition(sliderPosition + (100 / props.nrSlides));
        }
        else {
            setSliderPosition(0);
        }
    }



    return (
        <div className="carousel">
            <Slider ref={arrowRef} className="slider" {...settings}>
                {props.children}
            </Slider>
            
            <button onClick={() => prev()} className="prev-btn"> <PrevArrow /> </button>
            <button onClick={() => next()} className="next-btn"> <NextArrow /> </button>

            <div className="slider-line-bg">
                <div className="slider-line-container">
                    <div className="slider-line-inside" style={{width: (100 / props.nrSlides) + "%", left: sliderPosition + "%", backgroundColor: COLORS.mainThemeColor}} > </div>
                </div>
            </div>
            
        </div>
    )
}

export default CustomCarousel;