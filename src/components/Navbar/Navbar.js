
import React, { useEffect } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCross } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { COLORS } from '../../values/colors.js';
import "./Navbar.scss";
// import LogoImage from "../../img/logo.svg";

function Navbar(props) {

    // let [menuOpen, setMenuOpen] = useState(false);

    let [styles, setStyles] = useState({});
    let [menuColor, setMenuColor] = useState("light");

    useEffect(() => {
        setMenuColor(props.menuColor);
    }, [props.menuColor])


    useEffect(() => {
        if(menuColor == "light") {
            setStyles({
                menu: {color: COLORS.navLightColor},
                logo: {color: COLORS.navLightColor}
            });
        }
        else if(menuColor == "dark"){
            setStyles({
                menu: {color: COLORS.navDarkColor},
                logo: {color: COLORS.navDarkColor}
            });
        }

    }, [props.menuColor])

    return (
        <Flex width={"100%"} position="fixed" zIndex={999} justifyContent={"space-between"}>
            <Flex marginTop={"40px"} marginLeft={"40px"}>
                <Link to="/" style={styles.logo} >
                    <Text fontWeight={"700"} fontSize="30px">
                        <img src={require("../../img/logo.png")} alt="" />
                    </Text>
                </Link>
            </Flex>

            <Flex marginTop={"40px"} marginRight={"40px"}>
                <Link to="/menu">
                    <FontAwesomeIcon icon={faBars} size={"xl"} style={styles.menu} />
                </Link>
            </Flex>
        </Flex>
    )
}


export default Navbar;