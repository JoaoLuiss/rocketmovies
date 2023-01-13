import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: grid;
	grid-template-rows: 116px 61px auto;
	grid-template-areas:
		'header'
		'backline'
		'form';
`;

export const BackLine = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	grid-area: 'backline';
	padding-inline: 124px;
	/* padding-top: 33px; */

	> a {
		width: fit-content;
		color: ${({ theme }) => theme.COLORS.PINK};
		display: flex;
		align-items: center;
		gap: 8px;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 36px;
	grid-area: 'form';
	overflow-y: auto;
	padding-inline: 124px;

	h1 {
		font-size: 36rem;
		font-weight: 500;
	}

	div.title-and-rating {
		display: flex;
		gap: 36px;
	}

	textarea {
		min-height: 234px;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 24px;

		> h2 {
			font-size: 20rem;
			font-weight: 400;
			color: ${({ theme }) => theme.COLORS.GRAY_400};
		}
	
		> div.tag-manager {
			display: flex;
			gap: 24px;
			background-color: ${({ theme }) => theme.COLORS.BLACK_1000};
	
			padding: 16px;
			border-radius: 8px;
		}
	}

	div.buttons {
		display: flex;
		gap: 36px;

		button.remove {
			background-color: ${({ theme }) => theme.COLORS.BLACK_1000};
			color: ${({ theme }) => theme.COLORS.PINK};
		}
	}
	
`;
