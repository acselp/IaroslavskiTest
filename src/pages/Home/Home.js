
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HomeParallaxImage from "../../img/paralax_bg.png";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COLORS } from "../../values/colors.js";
import ArrowSvg from "../../components/SvgComponents/ArrowSvg";
import { useState, useEffect } from "react";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import Slide from "../../components/SliderSLides/Slide";
import LoanImage from "../../img/Portfolio/loan_financing.jpg"
import CornerSvg from "../../components/SvgComponents/CornerSvg";

// Styles
import "./Home.scss";


function Home() {

  let [sliderData, setSliderData] = useState([
    {
      header: "Transportation and forwarding services",
      text: "B&B Logistics covers most of the European markets, offering its customers a full range of logistics services through its partnerships",
      image: "frf.webp"
    },
    {
      header: "Services and solutions",
      text: "B&B Logistics offers transport solutions and supplies both for recipients and for transport companies thanks to collaboration with our partners.",
      image: "forwardingsolutions.webp"
    },
    {
      header: "Supply chain",
      text: "Each organisation has its own unique features and challenges. No matter how complex your organization may be, B&B Logistics finds the optimal solution for you.",
      image: "Supply_chain.webp"
    }
  ])

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
          <div className="home-header-container">
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
        </div>

        {/* <div className="home-data-cards-container">
          <div>
            <DataCard title="WE ARE WIZARDS OF" items={["UX/UI", "Web Apps", "IOS/Android", "API Development"]} text="We trust in excellent user experience. We shape the users’ journey accordingly to his needs by adding the perfect amount of visual." />
            <DataCard title="WE CAN ASSIST FURTHER" items={["Automated Testing", "DevOps & Delivery", "Technical support"]} text="We trust in excellent user experience. We shape the users’ journey accordingly to his needs by adding the perfect amount of visual." />
            <DataCard title="TECHNOLOGIES WE USE" items={["Azure", "AWS", ".NETCore", "SQLServer", "Node", "Angular", "React", "iOSSwift", "AndroidKotlin"]} text="We trust in excellent user experience. We shape the users’ journey accordingly to his needs by adding the perfect amount of visual." />
            <DataCard title="WE ARE WIZARDS OF" items={["UX/UI", "Web Apps", "IOS/Android", "API Development"]} text="We trust in excellent user experience. We shape the users’ journey accordingly to his needs by adding the perfect amount of visual." />
          </div>
        </div> */}

        <div className="slider-container">

          <CustomCarousel nrSlides={sliderData.length}>
            {sliderData.map((item, index) => {return (<div><Slide header={item.header} text={item.text} image={require("../../img/" + item.image)} /></div>)})}
          </CustomCarousel>

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

                <span class="email-text">
                  info@bnb.md
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