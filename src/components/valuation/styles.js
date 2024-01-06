import styled from 'styled-components';

const StyledValuation = styled.div`
	background-color: #f7f2f7;
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
	color: #512051;
	font-weight: bold;
	padding: 20px 0px;
	border-radius: 10px;

	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: row;
		width: 445px;
		justify-content: space-evenly;
		position: absolute;
		left: ${({ left }) => left + 'px'};
		top: ${({ top }) => top + 'px'};
	}
`;

export { StyledValuation };
