import "./Contact.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { COLORS } from "../../values/colors";
import { useState, useEffect } from "react";
import ContactParallaxImage from "../../img/paralax_bg.png";
import { useClipboard } from '@chakra-ui/react'


import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsLinkedin, BsPerson } from 'react-icons/bs';



function Contact() {

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

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, []);

    const { onCopy, value, setValue, hasCopied } = useClipboard("");
    

    return (
        <div className="portfolio-page">
            <Navbar menuColor={menuColorMode} />

            <div className="contact-parallax-bg" style={{ backgroundColor: COLORS.parallaxBgColor }}>
                <img src={ContactParallaxImage} alt="" />
            </div>


            <div className="contact-main-container">
            <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
                <Flex zIndex="999">
                    <Box
                        bg={"#343435"}
                        color="white"
                        borderRadius="lg"
                        m={{ sm: 4, md: 16, lg: 10 }}
                        p={{ sm: 5, md: 5, lg: 16 }}>
                        <Box p={4}>
                            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                                <WrapItem>
                                    <Box>
                                        <Heading color={"white"}>Contact</Heading>
                                        <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                                            Fill up the form below to contact
                                        </Text>
                                        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                            <Flex flexDir={"column"} alignItems="flex-start">
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{ border: '2px solid #1C6FEB', bgColor: "#fff0" }}
                                                    leftIcon={<MdPhone color={COLORS.mainThemeColor} size="20px" />}
                                                    onClick={() => {setValue("+373 62 111603");onCopy();}}>{value === "+373 62 111603" ? "Copied!" : "+373 62 111603"}
                                                    
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{ border: '2px solid #1C6FEB', bgColor: "#fff0" }}

                                                    leftIcon={<MdEmail color={COLORS.mainThemeColor} size="20px" />}
                                                    onClick={() => {setValue("info@bnb.md");onCopy();}}>{value === "info@bnb.md" ? "Copied!" : "info@bnb.md"}
                                                    
                                                    
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{ border: '2px solid #1C6FEB', bgColor: "#fff0" }}

                                                    leftIcon={<MdLocationOn color={COLORS.mainThemeColor} size="20px" />}
                                                    onClick={() => {setValue("Chișinău, Moldova");onCopy();}}>{value === "Chișinău, Moldova" ? "Copied!" : "Chișinău, Moldova"}

                                                    
                                                    
                                                </Button>
                                            </Flex>
                                        </Box>
                                        <HStack
                                            mt={{ lg: 10, md: 10 }}
                                            spacing={5}
                                            px={5}
                                            alignItems="flex-start">
                                            {/* <IconButton
                                                aria-label="xing"
                                                // variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: COLORS.mainThemeColor }}
                                                icon={<MdFacebook size="28px" />}
                                            /> */}
                                            <IconButton
                                                aria-label="likedin"
                                                // variant="g"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: COLORS.mainThemeColor }}
                                                icon={<BsLinkedin size="28px" />}
                                            />
                                            
                                        </HStack>
                                    </Box>
                                </WrapItem>
                                <WrapItem>
                                    <Box bg="white" borderRadius="lg">
                                        <Box m={8} color="#0B0E3F">
                                            <VStack spacing={5}>
                                                <FormControl id="name">
                                                    <FormLabel>Your Name</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                            children={<BsPerson color="gray.800" />}
                                                        />
                                                        <Input type="text" size="md" />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="name">
                                                    <FormLabel>Mail</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                            children={<MdOutlineEmail color="gray.800" />}
                                                        />
                                                        <Input type="text" size="md" />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="name">
                                                    <FormLabel>Message</FormLabel>
                                                    <Textarea
                                                        borderColor="gray.300"
                                                        _hover={{
                                                            borderRadius: 'gray.300',
                                                        }}
                                                        placeholder="message"
                                                    />
                                                </FormControl>
                                                <FormControl id="name" float="right">
                                                    <Button
                                                        variant="solid"
                                                        bg={COLORS.mainThemeColor}
                                                        color="white"
                                                        _hover={{}}>
                                                        Send Message
                                                    </Button>
                                                </FormControl>
                                            </VStack>
                                        </Box>
                                    </Box>
                                </WrapItem>
                            </Wrap>
                        </Box>
                    </Box>
                </Flex>
                </Container>
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

                <span className="email-text">
                  info@bnb.md
                </span>
              </div>
            </div>

            <Footer />
          </div>
        </div>

        </div>
    )
}

export default Contact;

