import styled from 'styled-components';

export const Container = styled.header`
	width: 100%;
	display: flex;
	align-items: center;

	grid-area: header;

	gap: 64px;
	padding: 24px 124px;
	border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

	> h1 {
		color: ${({ theme }) => theme.COLORS.PINK};
		font-size: 24rem;
	}

	> div {
		display: flex;
		gap: 8px;
		justify-content: center;
		align-items: center;
		white-space: nowrap;

		> div {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			/* width: 125px; */
		}

		img {
			width: 64px;
			height: 64px;
			border-style: solid;
			border-width: 1px;
			border-color: ${({ theme }) => theme.COLORS.GRAY_500};
			border-radius: 50%;
		}
	}
`;
