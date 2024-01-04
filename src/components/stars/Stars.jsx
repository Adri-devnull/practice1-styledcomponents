import { StyledStars } from "./styles";

const Stars = (props) => {
    return <StyledStars>
        <img src={props.url} />
        <img src={props.url} />
        <img src={props.url} />
        <img src={props.url} />
        <img src={props.url} />
    </StyledStars>
}

export default Stars;