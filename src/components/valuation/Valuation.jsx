import Stars from '../stars/Stars';
import { StyledValuation } from './styles';

const Valuation = ({ text, top, left }) => {
	return (
		<StyledValuation top={top} left={left}>
			<Stars url='./public/assets/images/icon-star.svg' />
			<span>{text}</span>
		</StyledValuation>
	);
};

export default Valuation;
