import { hover } from "@testing-library/user-event/dist/hover"
import { Flex, Text } from "@chakra-ui/react";
import "./ToolItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ToolItem(props) {

    return (
        <Flex alignItems={"center"} className="text-card-container">
            <div className="text-card">
                {props.text}
            </div>
        </Flex>
    )
}

export default ToolItem;