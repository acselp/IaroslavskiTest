
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HomeParallaxImage from "../../img/paralax_bg.png";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataCard from "../../components/HomeDataCards/DataCard";
import { COLORS } from "../../values/colors.js";
import ArrowSvg from "../../components/SvgComponents/ArrowSvg";
import { useState, useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import Project from "../../components/Project/Project";
// Styles
import "./Home.scss";


function Home() {

  let [services, setServices] = useState(
    [
      {
        title: "Transportation and forwarding services",
        text: "B&B Logistics covers most of the European markets, offering its customers a full range of logistics services through its partnerships",
        image: "frf.png"
      },
      {
        title: "Services and solutions",
        text: "B&B Logistics offers transport solutions and supplies both for recipients and for transport companies thanks to collaboration with our partners.",
        image: "fs.jpg"
      },
      {
        title: "Supply chain",
        text: "Each organisation has its own unique features and challenges. No matter how complex your organization may be, B&B Logistics finds the optimal solution for you.",
        image: "sc.png"
      }
    ]
  );
  let [reverseContent, setReverseContent] = useState(true);




  let [navBarColorMode, setNavBarColorMode] = useState("dark");

  const listenScrollEvent = e => {
      if (window.scrollY < 770) {
        setNavBarColorMode("light");
      }

      if (window.scrollY > 770) {
          setNavBarColorMode("dark");
      }
      
     

      if (window.scrollY > 4450){
        setNavBarColorMode("light");
      }
  }

  useEffect(() => {
    setNavBarColorMode("light");
  }, []);

  useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent)
  }, []);

  return (
    <div className="home-page">
      <Navbar menuColor={navBarColorMode}/>

        <div className="home-parallax-bg" style={{backgroundColor: COLORS.parallaxBgColor}}>
          <img src={HomeParallaxImage} alt="" />
        </div>
      

        <div className="home-top-section" style={{backgroundColor: COLORS.mainThemeColor}}>
          <h1 className="header-main-theme-7-5-em" align="left">
            Take digital ideas<br/> forward.
          </h1>

          <span align="left">
            We are a digital development company, with a mission to build your product<br/> from zero to hero with everything in between.
          </span>

           <div className="home-about">
              <Link to="/about">
                {/* <FontAwesomeIcon icon={faCircleArrowRight} fontSize="50px" color="#343435"/> */}
                <ArrowSvg />
              </Link>
              <span>About Us</span>
           </div>
        </div>

        <div className="projects">
            {/* <DataCard title="WE ARE WIZARDS OF" items={["UX/UI", "Web Apps", "IOS/Android", "API Development"]} text="We trust in excellent user experience. We shape the users’ journey accordingly to his needs by adding the perfect amount of visual." />
            <DataCard title="WE CAN ASSIST FURTHER" items={["Automated Testing", "DevOps & Delivery", "Technical support"]} text="We trust in excellent user experience. We shape the users’ journey accordingly to his needs by adding the perfect amount of visual." />
            <DataCard title="TECHNOLOGIES WE USE" items={["Azure", "AWS", ".NETCore", "SQLServer", "Node", "Angular", "React", "iOSSwift", "AndroidKotlin"]} text="We trust in excellent user experience. We shape the users’ journey accordingly to his needs by adding the perfect amount of visual." />
            <DataCard title="WE ARE WIZARDS OF" items={["UX/UI", "Web Apps", "IOS/Android", "API Development"]} text="We trust in excellent user experience. We shape the users’ journey accordingly to his needs by adding the perfect amount of visual." /> */}

            {services.map((item, index) => {

                return(
                  <Project 
                    header={item.title}
                    text= {item.text}
                    image={require("../../img/" + item.image)}
                    reverseContent={index % 2}
                  />
                );
            
            })}




        </div>

        {/* <div className="slider-container">
          <Slider />
        </div> */}

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
  );
}

export default Home;