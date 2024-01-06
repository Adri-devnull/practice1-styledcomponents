import styled from 'styled-components';

const StyledHeader = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0px 50px 0px 50px;
	font-family: 'League Spartan', sans-serif;

	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding-top: 130px;
	}
`;

export { StyledHeader };
