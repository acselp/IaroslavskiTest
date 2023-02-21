import "./Menu.scss";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { COLORS } from "../../values/colors";
import { useEffect, useState } from "react";

function Menu() {

    let [menuColorMode, setMenuColorMode] = useState("dark");

    useEffect(() => {
        setMenuColorMode("ligth");
    }, []);

    return (
        <div className="menu-page" style={{
            backgroundColor: COLORS.mainThemeColor,
        }}>
            <Navbar menuColor={menuColorMode}/>

            <div className="menu">
                <div className="nav-items">
                    <Link to="/about" className="nav-item">About us</Link>
                    <Link to="/order" className="nav-item">Place Order</Link>
                    <Link to="/price" className="nav-item">Price request</Link>
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
