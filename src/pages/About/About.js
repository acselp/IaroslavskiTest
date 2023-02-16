import "./About.scss";
import AboutParallaxImage from "../../img/about_parallax.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import DigitalIdeasImage from "../../img/digital_ideas.png";
import { COLORS } from "../../values/colors"; 
import { useState, useEffect } from "react";

function About() {

    let [navBarColorMode, setNavBarColorMode] = useState("light");

    const listenScrollEvent = e => {
        if (window.scrollY < 850) {
          setNavBarColorMode("dark");
        }

        if (window.scrollY > 850) {
            setNavBarColorMode("light");
        }
        
        if (window.scrollY > 1750){
            setNavBarColorMode("dark");
        }

        if (window.scrollY > 2850){
          setNavBarColorMode("light");
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, []);

    return (
        <div className="about-page">
            <Navbar menuColor={navBarColorMode}/>

            <div className="about-parallax-bg">
                <img src={AboutParallaxImage} alt="" />
            </div>

            <div className="about-container">
                <div className="about-empty-container">
                </div>

                <div className="about-digital-ideas" style={{backgroundColor: COLORS.mainThemeColor}}>
                    <div className="about-ideas-left">
                        <div class="ideas-header aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" style={{color: COLORS.fontColorOnMainThemeColor}}>
                            Take digital ideas forward.
                        </div>

                        <div class="ideas-text aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" style={{color: COLORS.fontColorOnMainThemeColor}}>
                            We are not just an ordinary development company, we are your result driven team of developers who can help you build a product from zero to hero and everything in between.
                        </div>
                    </div>

                    <div className="about-ideas-left">
                        <img src={DigitalIdeasImage} alt="" />
                    </div>
                </div>

                <div className="about-empty-container">
                </div>

                <div className="home-bottom-section">
          <div className="home-contact-info" style={{backgroundColor: COLORS.mainThemeColor}}>

            <svg width="252" height="250" class="corner-stripes">
              <path fill="#fbae17" d="M-54.869 299.629l-40.903-40.903 386.73-386.73 40.903 40.903z">
              </path>

              <path fill="#f6921e" d="M-95.779 258.719l-40.903-40.903 386.73-386.73 40.903 40.903z">
              </path>

              <path fill="#f05b40" d="M-136.688 217.81l-40.903-40.903 386.73-386.73 40.903 40.903z">
              </path>
            </svg>

            <div className="home-contact-info-left">
              <div class="header-main-theme-6-em" data-aos="fade-up" data-aos-duration="500">
                Take digital ideas forward.
              </div>
              
              <div class="home-contact aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                <svg width="46" height="46" class="btn-arrow">
                  <g data-name="Group 111" transform="translate(-143 -520)">
                    <circle data-name="Ellipse 1" cx="23" cy="23" r="23" transform="translate(143 520)" fill="#3b3b3c">
                    </circle>
                    <g data-name="Group 32">  
                      <g data-name="Group 31" fill="none" stroke="#ffc132" stroke-miterlimit="10" stroke-width="2">
                        <path data-name="Path 24" d="M169.487 537.327l6.061 7.05-6.061 7.05">
                        </path>
                        <path data-name="Line 9" d="M175.669 544.522h-21.29">
                        </path>
                      </g>
                    </g>
                  </g>
                </svg>

                <span class="email-text">
                  hello@techquarter.io
                </span>
              </div>
            </div>

            <Footer />
          </div>
        </div>
            </div>
            
           
        </div>
    );
}

export default About;