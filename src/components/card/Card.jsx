const Card = props => {
	return (
		<div>
			<img src={props.url} />
			<h3>{props.name}</h3>
			<span>{props.subtitle}</span>
		</div>
	);
};

export default Card;
