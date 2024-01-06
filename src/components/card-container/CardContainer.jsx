import { StyledCardContainer } from './styles';

const CardContainer = ({ children, top, left }) => {
	return (
		<StyledCardContainer top={top} left={left}>
			{children}
		</StyledCardContainer>
	);
};

export default CardContainer;
