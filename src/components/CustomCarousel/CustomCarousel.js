import "./CustomCarousel.scss";
import Slider from 'react-slick';
import './slick.scss';
import './slick-theme.scss';
// import SliderArrow from "../SvgComponents/SliderArrow";


function CustomCarousel(props) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // nextArrow: {SliderArrow}
    };

    return (
        <div className="carousel">
            <Slider className="slider" {...settings}>
                {props.children}
            </Slider>
        </div>
    )
}

export default CustomCarousel;