import styled from 'styled-components';

const StyledTitle = styled.h1`
	color: #512051;
	font-size: 2.7rem;
	font-weight: bold;
	width: 280px;
	text-align: center;
	line-height: 0.8em;

	@media screen and (min-width: 768px) {
		font-size: 4.5rem;
		width: 500px;
		text-align: start;
	}
`;

export { StyledTitle };
