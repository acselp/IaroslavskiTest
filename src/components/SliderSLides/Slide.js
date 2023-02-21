import "./Slide.scss";
import { useEffect, useState } from "react";


function Slide(props) {


    let [styles, setStyles] = useState({});


    useEffect(() => {

        if(props.reverseContent) {
            setStyles({
                container: {"flex-direction": "row-reverse"},
                left: {"transform": "translateX(-20%)"},
                right: {"transform": "translateX(6%)"}
            });
        }
        else {
            setStyles({
                container: {},
                left: {},
                right: {}
            });
        }
    }, [props.reverseContent]);

    return (
        <div className="slide-container aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" style={styles.container}>

            <div className="slide-left" style={styles.left}>
                <div className="slide-title">
                    {props.header}
                </div>
                <div className="slide-title-little">
                    {props.text}
                </div>
            </div>

            <div className="slide-right" style={styles.right}>
                <img src={props.image} alt="" />
            </div>
        </div>
    );
}

export default Slide;