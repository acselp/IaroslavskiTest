
import React from 'react'
import { Flex } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCross } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Navbar() {

    let [menuOpen, setMenuOpen] = useState(false);

    return (
        <Flex width={"100%"} position="fixed" zIndex={999} justifyContent={"space-between"}>
            <Flex marginTop={"40px"} marginLeft={"40px"}>
                <Link to="/">
                Logo
                    {/* <svg viewBox="0 0 74.615 63.175"><path d="M74.084 58.184L60.696 44.809a31.638 31.638 0 002.8-13.058 31.329 31.329 0 00-2.818-13.045 31.705 31.705 0 00-15.889-15.9 31.609 31.609 0 00-13.044-2.8A31.742 31.742 0 00-.006 31.756a31.318 31.318 0 002.8 13.045 31.712 31.712 0 0015.9 15.888 31.327 31.327 0 0013.044 2.817h40.125a3.116 3.116 0 002.221-5.322z" fill="#ffb31b"></path><path d="M63.501 31.75a31.635 31.635 0 01-2.8 13.058L47.644 31.75l13.044-13.044a31.321 31.321 0 012.813 13.044z" fill="#fbae17"></path><path d="M44.795 2.805L2.805 44.796a31.318 31.318 0 01-2.8-13.045A31.742 31.742 0 0131.756.001a31.609 31.609 0 0113.039 2.804z" fill="#f05b40"></path><path d="M60.683 18.707a31.7 31.7 0 00-15.888-15.9L2.805 44.798a31.7 31.7 0 0015.9 15.888z" fill="#f6921e"></path><path d="M47.603 63.502H31.754a31.326 31.326 0 01-13.044-2.818l13.044-13.031z" fill="#fbae17"></path><path d="M71.876 63.502H47.6l-26.289-26.29a3.2 3.2 0 012.262-5.461H47.64l13.058 13.058 13.388 13.375a3.117 3.117 0 01-2.21 5.318z" fill="#ffc132"></path></svg> */}
                    {/* <g data-name="Logo symbol" fill="#3b3b3c"><path data-name="Path 6" d="M42.991 2.132A31.456 31.456 0 0031.591 0 31.579 31.579 0 00.004 31.588a31.275 31.275 0 002.128 11.408l12.524-12.524z"></path><path data-name="Path 7" d="M44.565 2.79l-28.8 28.8L2.788 44.567a31.8 31.8 0 0014.337 15.058c12.877-12.863 11.771-11.757 12.228-12.216l-9.27-9.27a4.686 4.686 0 01-1.032-5.189 4.687 4.687 0 014.4-2.938h25.523l11.4-11.4A32.022 32.022 0 0044.565 2.79z"></path><g data-name="Group 9"><path data-name="Path 8" d="M61.035 20.18L49.629 31.589l11.415 11.415a31.483 31.483 0 002.132-11.417 31.231 31.231 0 00-2.141-11.407z"></path><path data-name="Path 9" d="M30.471 48.523l-11.86 11.849a31.221 31.221 0 0012.977 2.8h13.535z"></path></g><path data-name="Path 10" d="M73.705 57.885c-9.212-9.2-27.414-27.4-26.31-26.3H23.452a3.183 3.183 0 00-2.251 5.433l26.154 26.154h24.151a3.1 3.1 0 002.199-5.287z"></path></g> */}
                </Link>
            </Flex>

            <Flex marginTop={"40px"} marginRight={"40px"}>
                <Link to="/menu">
                    <FontAwesomeIcon icon={faBars} size={"xl"}/>
                </Link>
            </Flex>
        </Flex>
    )
}


export default Navbar;