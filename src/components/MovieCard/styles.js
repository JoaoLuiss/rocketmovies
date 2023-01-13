import styled from 'styled-components';

export const Container = styled.button`
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 12px;

	background-color: ${({ theme }) => theme.COLORS.PINK}08;
	color: ${({ theme }) => theme.COLORS.WHITE};

	border-radius: 16px;
	padding: 32px;
	transition: all .4s;

	&:hover {
		transform: scale(1.1);
		filter: brightness(1) contrast(1.1);
	}

	> div {
		display: flex;
		align-self: flex-start;
		flex-direction: column;
		gap: 6px;
	}

	> p {
		max-width: 100%;
		max-height: 54rem;
		font-family: 'Roboto', sans-serif;
		color: ${({ theme }) => theme.COLORS.GRAY_400};
		text-align: left;

		display: block;
		align-self: flex-start;

		// hidding the text part that overflows 2 lines...
		white-space: pre-wrap;
		overflow-y: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2; // 2 lines
		-webkit-box-orient: vertical;
	}

	> .card-list {
		display: flex;
		flex-direction: row;
		gap: 8px;

		margin-top: 16px;
	}
`;
