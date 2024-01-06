import { INFOCARDS } from '../../constants/infoCards';
import Card from '../card/Card';
import { StyledCards } from './styles';

const Cards = () => {
	return (
		<StyledCards>
			{INFOCARDS.map(card => (
				<Card
					key={card.id}
					url={card.url}
					name={card.name}
					subtitle={card.subtitle}
					information={card.information}
					top={card.top}
					left={card.left}
				/>
			))}
		</StyledCards>
	);
};

export default Cards;

// PREGUNTAR DIFERENCIA ENTRE PONERLO ASI Y DE LA OTRA MANERA

// return INFOCARDS.map(card => {
//     return (
//         <Card
//             key={card.id}
//             url={card.url}
//             name={card.name}
//             subtitle={card.subtitle}
//             information={card.information}
//         />
//     );
// });
