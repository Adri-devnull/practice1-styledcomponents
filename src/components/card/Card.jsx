import CardImage from '../card-image/CardImage';
import CardName from '../card-name/CardName';
import CardSubtitle from '../card-subtitle/CardSubtitle';

const Card = ({ url, name, subtitle }) => {
	return (
		<div>
			<CardImage url={url} />
			<CardName name={name} />
			<CardSubtitle subtitle={subtitle} />
		</div>
	);
};

export default Card;
