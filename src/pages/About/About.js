import "./About.scss";
import AboutParallaxImage from "../../img/about_parallax.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


function About() {

    return (
        <div className="menu-page">
            <Navbar />

            <div className="about-parallax-bg">
                <img src={AboutParallaxImage} alt="" />
            </div>
            
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
}

export default About;