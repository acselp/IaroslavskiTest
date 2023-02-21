import "./Price.scss";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    Container,
    useColorModeValue,
  } from '@chakra-ui/react';

  import Footer from "../../components/Footer/Footer";
  import { useState, useEffect } from "react";

  import Navbar from "../../components/Navbar/Navbar";
  import { COLORS } from "../../values/colors";
  import ContactParallaxImage from "../../img/paralax_bg.png"

function Price() {

    let [menuColorMode, setMenuColorMode] = useState("dark");

    useEffect(() => {
        setMenuColorMode("dark");
    }, []);

    const listenScrollEvent = e => {
        if (window.scrollY < 900) {
          setMenuColorMode("dark");
        }

        if (window.scrollY > 900) {
            setMenuColorMode("light");
          }
    }

    return (
        <Flex flexDirection={"column"}>

            <Navbar menuColor={menuColorMode} />

            <div className="contact-parallax-bg" style={{ backgroundColor: COLORS.parallaxBgColor }}>
                <img src={ContactParallaxImage} alt="" />
            </div>
            <Flex
                zIndex="1"
                width={"100%"}
                paddingTop={"5%"}
                paddingBottom="10%"   
                justifyContent={"center"} 
            >

            <Box
                width={"50%"}
                bgColor={"#343435"}
                rounded={'lg'}
                bg={useColorModeValue('#343435', 'white')}
                boxShadow={'lg'}
                p={8}>
                <Stack 
                    spacing={4}
                    
                >
                    <FormControl id="email">
                        <FormLabel color="white"><b>Price request</b></FormLabel>
                        <Input color="white" type="text" placeholder="Company name *" _placeholder={{color: "#ffff"}}/>
                    </FormControl>



                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Contact person *"   _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Telephone *"   _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Loading address and date *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Unloading address and date *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Load type and characteristics *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>


                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Load package (pallets, boxes, no package etc.) *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Load volume, m3 *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Load volume, ldm *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Load weight, t *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Temperature of transportation (if needed) *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Special transport conditions (fragile etc.) *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Freight value *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Special conditions (ADR, AAD, TIR) *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>


                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Method and time of payment *"   _placeholder={{color: "#ffff"}}/>
                    </FormControl>




                    <Stack spacing={10}>
                        
                        <Button
                            marginTop={"20px"}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                            bg: 'blue.500',
                            }}>
                            Send
                        </Button>
                    </Stack>
                </Stack>
            </Box>
            </Flex>


            <div className="contact-bottom-section">
                <div className="home-contact-info" style={{ backgroundColor: COLORS.mainThemeColor }}>

                    <svg width="252" height="250" class="corner-stripes">
                        <path fill="#fbae17" d="M-54.869 299.629l-40.903-40.903 386.73-386.73 40.903 40.903z">
                        </path>

                        <path fill="#f6921e" d="M-95.779 258.719l-40.903-40.903 386.73-386.73 40.903 40.903z">
                        </path>

                        <path fill="#f05b40" d="M-136.688 217.81l-40.903-40.903 386.73-386.73 40.903 40.903z">
                        </path>
                    </svg>

                    <div className="contact-contact-info-left">
                        <div class="header-main-theme-6-em contact-header" data-aos="fade-up" data-aos-duration="500">
                            We create opportunities.
                        </div>

                        <div class="contact-home-contact aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
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
        </Flex>
    )
}

export default Price;