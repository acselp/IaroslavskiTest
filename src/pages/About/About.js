import "./About.scss";
import AboutParallaxImage from "../../img/about_parallax.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AboutImage from "../../img/about.png";
import { COLORS } from "../../values/colors"; 
import { useState, useEffect } from "react";
import CornerSvg from "../../components/SvgComponents/CornerSvg";
import ArrowSvg from "../../components/SvgComponents/ArrowSvg";

function About() {

   let [colorMode, setColorMode] = useState("dark");


    useEffect(() => {
      setColorMode("light");
    }, [colorMode]);

    return (
        <div className="about-page">
            <Navbar menuColor={colorMode}/>

            <div className="about-parallax-bg">
                <img src={AboutParallaxImage} alt="" repeat/>
                {/* <img src={AboutParallaxImage} alt="" /> */}
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

            <CornerSvg />

            <div className="home-contact-info-left">
              <div class="header-main-theme-6-em" data-aos="fade-up" data-aos-duration="500">
                We create opportunities.
              </div>
              
              <div class="home-contact aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                
                <ArrowSvg />

                <span className="email-text">
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