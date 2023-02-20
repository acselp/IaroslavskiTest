import "./About.scss";
import AboutParallaxImage from "../../img/about_parallax.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AboutImage from "../../img/about.png";
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
                    <div className="about-ideas-block">
                        <div className="about-ideas-img aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <img src={AboutImage} alt="" />
                        </div>
                        
                        <div class="line-container aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                          <div className="about-line"></div>
                        </div>

                        <div class="ideas-header aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" style={{color: COLORS.fontColorOnMainThemeColor}}>
                          About us
                        </div>

                        <div class="ideas-text aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" style={{color: COLORS.fontColorOnMainThemeColor}}>
                          Our major company activity is overland international cargo in the European Union and CIS countries. The company also provides forwarding services. B&B Logistics is your reliable partner.The strategic objective of B&B Logistics is building trustful relationships with partners. 
                        </div>

                        <div class="line-container aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                          <div className="about-line"></div>
                        </div>

                        <div class="ideas-header aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" style={{color: COLORS.fontColorOnMainThemeColor}}>
                          Service
                        </div>

                       

                        <div class="ideas-text aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" style={{color: COLORS.fontColorOnMainThemeColor}}>
                          <div className="ideas-header-2">
                            International transport and freight forwarding 
                          </div>
                          <p>
                            The main activity of the company is forwarding and transportation of goods of all within Europe and the CIS countries   
                          </p> 
                          <ul className="about-list">
                            <li>
                              92 m3 trailers. 
                            </li>
                            <li>
                              100 m3 Jumbo trailers, adapted to carry cargoes of specific height (up to 3,15m). 
                            </li>
                            <li>
                              120m3. 
                            </li>
                            <li>
                              Refrigerators – temperature -18C to +8C. 
                            </li>
                          </ul>
                          <p className="mt-20">
                          The international transportation of goods from the company B&B LOGISTICS – is a responsible attitude towards the client load, the correct execution of all required documents, and total control over the good, as well as informing the customer about the whereabouts of the goods.
B&B LOGISTICS will provide the best price and most favorable terms and conditions for you. 
                          </p>
                          <p className="mt-20">
                          Place your request on sales@bnb.md and we will advise you how to transport your goods at the best prices.
                          </p>
                          <div class="line-container aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                          <div className="about-line"></div>
                        </div>
                        </div>
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
                We create opportunities.
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
                  info@bnb.md
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