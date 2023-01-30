import "./Menu.scss";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { COLORS } from "../../values/colors";

function Menu() {

    return (
        <div className="menu-page" style={{
            backgroundColor: COLORS.mainThemeColor,
        }}>
            <Navbar />

            <div className="menu">
                <div className="nav-items">
                    <Link to="/about" className="nav-item">About us</Link>
                    <Link to="/portfolio" className="nav-item">Our work</Link>
                    <Link to="/contact" className="nav-item">Contact</Link>
                </div>
            </div>
            
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
}

export default Menu;
