import styled from 'styled-components';

const StyledCards = styled.div`
	font-family: 'League Spartan', sans-serif;
	display: flex;
	flex-direction: column;
	padding: 50px;
	gap: 20px;

	@media screen and (min-width: 768px) {
		position: relative;
		margin-bottom: 400px;
	}
`;

export { StyledCards };
