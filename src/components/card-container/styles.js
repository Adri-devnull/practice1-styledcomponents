import styled from 'styled-components';

const StyledCardContainer = styled.div`
	background-color: #512051;
	border-radius: 8px;
	padding: 30px;

	@media screen and (min-width: 768px) {
		width: 350px;
		height: 234px;
		position: absolute;
		top: ${({ top }) => top + 'px'};
		left: ${({ left }) => left + 'px'};
	}
`;

export { StyledCardContainer };
