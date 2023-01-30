import { Flex, Text } from "@chakra-ui/react";
import ToolItem from "./ToolItem";
import "./DataCard.scss";

function DataCard(props) {

    return (
        <div className="data-card">
            <Flex data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
                <div style={{
                    backgroundColor: "#FFC132",
                    height: "2px",
                    width: "3em"
                }}></div>
                <Text style={{
                    letterSpacing: "5px",
                    fontSize: "1.4em",
                    paddingLeft: "5px",
                    whiteSpace: "nowrap",
                    color: "#FFC132",
                    fontWeight: "400",
                    marginLeft: "5px",
                    marginTop: "-17px"
                }}>
                    {props.title}
                </Text>
            </Flex>
            <Flex data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" marginLeft={"1em"} marginTop="45px" flexDirection="column">
                {props.items.map((item) => {return (<ToolItem text={item} />)})}
            </Flex>
            <Flex data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" marginLeft={"3.5em"} marginTop="40px" style={{
                fontSize: "1.6em",
                marginTop: "40px",
                color: "#AEAEAE",
                marginLeft: "58px",
                maxWidth: "730px"
            }}>
                {props.text}
            </Flex>
        </div>
    )
}

export default DataCard;