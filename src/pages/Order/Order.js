import "./Order.scss";
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
    FormErrorMessage,
    FormHelperText
  } from '@chakra-ui/react';

  import Footer from "../../components/Footer/Footer";
  import { useState, useEffect } from "react";

  import Navbar from "../../components/Navbar/Navbar";
  import { COLORS } from "../../values/colors";
  import ContactParallaxImage from "../../img/paralax_bg.png"
  import CornerSvg from "../../components/SvgComponents/CornerSvg";
  import ArrowSvg from "../../components/SvgComponents/ArrowSvg";

function Order() {

    let [menuColorMode, setMenuColorMode] = useState("dark");
    let [formData, setFormData] = useState({});

    function handleDate(e) {
        formData.date = e.target.value;
    }

    function handleConsigner(e) {
        formData.consigner = e.target.value;
    }

    function handleLoadingAddress(e) {
        formData.loadingAddress = e.target.value;
    }

    function handleExportCustms(e) {
        formData.exportCustoms = e.target.value;
    }

    function handleContactOnLoading(e) {
        formData.contactOnLoading = e.target.value;
    }

    function handleLoadingDateAndTime(e) {
        formData.loadingDateAndTime = e.target.value;
    }

    function handleReferenceNumber(e) {
        formData.referenceNumber = e.target.value;
    }

    function handleBorderCrossPoint(e) {
        formData.borderCrossPoint = e.target.value;
    }

    function handleConsignee(e) {
        formData.consignee = e.target.value;
    }

    function handleUnloadingAddress(e) {
        formData.unloadingAddress = e.target.value;
    }

    function handleImportCustoms(e) {
        formData.importCustoms = e.target.value;
    }

    function handleContactOnUploading(e) {
        formData.contactOnUploading = e.target.value;
    }

    function handleUploadingDateAndTime(e) {
        formData.uploadingDateAndTime = e.target.value;
    }

    function handleLoadTypeAndCharacteristics(e) {
        formData.loadTypeAndCharacteristics = e.target.value;
    }

    function handleLoadPackage(e) {
        formData.loadPackage = e.target.value;
    }

    function handleLoadVolume_m3(e) {
        formData.loadVolume_m3 = e.target.value;
    }

    function handleLoadVolume_ldm(e) {
        formData.loadVolume_ldm = e.target.value;
    }

    function handleLoadWeight(e) {
        formData.loadWeight = e.target.value;
    }

    function handleTemperatureOfTransportation(e) {
        formData.loadWeight = e.target.value;
    }

    function handleSpecialTransportConditions(e) {
        formData.specialTransportConditions = e.target.value;
    }

    function handleFreightValue(e) {
        formData.freightValue = e.target.value;
    }

    function handleSpecialConditions(e) {
        formData.specialConditions = e.target.value;
    }

    function handleCompanyName(e) {
        formData.specialCompanyName = e.target.value;
    }

    function handleVATNumber(e) {
        formData.VATNumber = e.target.value;
    }

    function handleLegalAddress(e) {
        formData.legalAddress = e.target.value;
    }

    function handleContactPerson(e) {
        formData.contactPerson = e.target.value;
    }

    function handleBank(e) {
        formData.bank = e.target.value;
    }

    function handleSwift(e) {
        formData.swift = e.target.value;
    }

    function handleIBAN(e) {
        formData.IBAN = e.target.value;
    }

    function handleTelephone(e) {
        formData.telephone = e.target.value;
    }

    function handleCell(e) {
        formData.cell = e.target.value;
    }

    function handleFAX(e) {
        formData.FAX = e.target.value;
    }

    function handleEmail(e) {
        formData.email = e.target.value;
    }





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
        <Flex flexDirection={"column"} width="100%">

            <Navbar menuColor={menuColorMode} />

            <div className="contact-parallax-bg" style={{ backgroundColor: COLORS.parallaxBgColor }}>
                <img src={ContactParallaxImage} alt="" />
            </div>
            <Flex
                width={"100%"}
                zIndex="1"
                paddingTop={"5%"}
                paddingBottom="10%"  
                justifyContent={"center"}
            >
                
            <Box
                // width="50%"
                className="order-form"
                bgColor={"#343435"}
                rounded={'lg'}
                bg={useColorModeValue('#343435', 'white')}
                boxShadow={'lg'}
                p={8}>
                <Stack 
                    spacing={5}
                    
                >
                    <FormControl id="email">
                        <FormLabel color="white"><b>Create order online</b></FormLabel>
                        <Input color="white" type="text" placeholder="Date *" _placeholder={{color: "#ffff"}}/>
                    </FormControl>



                    <FormControl id="email">
                        <FormLabel color="white"><b>Consigner info</b></FormLabel>
                        <Input color="white" type="email" onChange={handleDate} placeholder="Consigner *"   _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Loading address *"   _placeholder={{color: "#ffff"}}/>
                        <FormErrorMessage>Email is required.</FormErrorMessage>

                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Export customs *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Contact on loading *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Loading date and time *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Reference number *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Border cross point *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>




                    <FormControl id="email">
                        <FormLabel color="white"><b>Consignee info</b></FormLabel>
                        <Input color="white" type="text" placeholder="Consignee *"   _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Unloading address *"   _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Import customs *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Contact on uploading *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Uploading date and time *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>






                    <FormControl id="email">
                        <FormLabel color="white"><b>Load info</b></FormLabel>
                        <Input color="white" type="text" placeholder="Load type and characteristics *"   _placeholder={{color: "#ffff"}}/>
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
                        <FormLabel color="white"><b>Customer information</b></FormLabel>
                        <Input color="white" type="text" placeholder="Company name *"   _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="VAT number / Reg. Number *"   _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Legal address *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Contact person *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Bank *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="SWIFT *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="IBAN *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Telephone *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="Cell *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="FAX *"  _placeholder={{color: "#ffff"}}/>
                    </FormControl>

                    <FormControl id="email">
                        <Input color="white" type="text" placeholder="E-Mail *"  _placeholder={{color: "#ffff"}}/>
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

                    <CornerSvg />

                    <div className="contact-contact-info-left">
                        <div class="header-main-theme-6-em contact-header" data-aos="fade-up" data-aos-duration="500">
                            We create opportunities.
                        </div>

                        <div class="contact-home-contact aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                           
                            <ArrowSvg />

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

export default Order;