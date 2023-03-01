import { COLORS } from "../../values/colors";

function ArrowSvg(props) {



    return (
        <svg width="46" height="46" class="about-arrow"><g data-name="Group 111" transform="translate(-143 -520)"><circle data-name="Ellipse 1" cx="23" cy="23" r="23" transform="translate(143 520)" fill="#3b3b3c"></circle><g data-name="Group 32"><g data-name="Group 31" fill="none" stroke={ props.arrowColor || COLORS.mainThemeColor } stroke-miterlimit="10" stroke-width="2"><path data-name="Path 24" d="M169.487 537.327l6.061 7.05-6.061 7.05"></path><path data-name="Line 9" d="M175.669 544.522h-21.29"></path></g></g></g></svg>
    )
}

export default ArrowSvg;