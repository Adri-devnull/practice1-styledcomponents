import Stars from "../stars/Stars";
import { StyledValuation } from "./styles";

const Valuation = (props) => {
    return <StyledValuation>
        <Stars url='./public/assets/images/icon-star.svg' />
        <span>{props.text}</span>
    </StyledValuation>
}

export default Valuation;