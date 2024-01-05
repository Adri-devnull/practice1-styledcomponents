import CardContainer from '../card-container/CardContainer';
import CardImage from '../card-image/CardImage';
import CardInfo from '../card-info/CardInfo';
import CardName from '../card-name/CardName';
import CardSubtitle from '../card-subtitle/CardSubtitle';
import NameSubtitle from '../name-subtitle/NameSubtitle';

const Card = ({ url, name, subtitle, information }) => {
	return (
		<CardContainer>
			<NameSubtitle>
				<div>
					<CardImage url={url} />
				</div>
				<div>
					<CardName name={name} />
					<CardSubtitle subtitle={subtitle} />
				</div>
			</NameSubtitle>
			<CardInfo information={information} />
		</CardContainer>
	);
};

export default Card;
