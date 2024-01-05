import Card from './components/card/Card';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import Information from './components/information/Information';
import Ratings from './components/ratings/Ratings';
import Title from './components/title/Title';
import Valuation from './components/valuation/Valuation';

const App = () => {
	return (
		<>
			<Header>
				<Headline>
					<Title text='10,000+ of our users love our products.' />
					<Information text='We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.' />
				</Headline>
				<Ratings>
					<Valuation text='Rated 5 Stars in Reviews' />
					<Valuation text='Rated 5 Stars in Report Guru' />
					<Valuation text='Rated 5 Stars in BestTech' />
				</Ratings>
				<Card
					name='Adrian'
					subtitle='Verified buyer'
					url='./public/assets/images/image-colton.jpg'
					information='“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”'
				/>
			</Header>
		</>
	);
};

export default App;
