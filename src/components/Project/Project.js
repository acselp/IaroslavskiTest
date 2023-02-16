import "./Project.scss";
import { useState, useEffect } from "react";

function Project(props) {

    let [styles, setStyles] = useState({});


    useEffect(() => {

        if(props.reverseContent) {
            setStyles({
                container: {"flex-direction": "row-reverse"},
                left: {"transform": "translateX(-10%)"},
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

    return(
        <div className="project-container aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" style={styles.container}>

            <div className="project-left" style={styles.left}>
                <div className="project-title">
                    {props.header}
                </div>
                <div className="project-title-little">
                    {props.text}
                </div>
            </div>

            <div className="project-right" style={styles.right}>
                <img src={props.image} alt="" />
            </div>
        </div>
    );
}

export default Project;