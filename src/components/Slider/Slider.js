import "./Slider.scss";
import { Carousel } from "react-responsive-carousel";
import Image from "../../img/digital_ideas.png";


function Slider() {
    return (
        <div className="slider">
            <Carousel>
                <div>
                    <img src={Image} />
                </div>   
                <div>
                    2
                </div>   
                <div>
                    3
                </div>   
                <div>
                    4
                </div>           
            </Carousel>
        </div>
    );
}

export default Slider;