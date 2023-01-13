import styled from 'styled-components';

import backgroundCinema from '../../assets/background-cinema.png';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	`;
	
	export const Form = styled.form`
		width: 340rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		
		margin-inline: 134rem;

		> h1 {
			font-size: 48rem;
			font-weight: 700;
			color: ${({theme}) => theme.COLORS.PINK};
		}

		> p {
			font-size: 14rem;
			color: ${({theme}) => theme.COLORS.WHITE_200};
		}
		
		> h2 {
			margin-top: 48rem;
			margin-bottom: 36rem;
			font-size: 24rem;
			color: ${({theme}) => theme.COLORS.WHITE};
		}

		> button {
			margin-top: 24px;
		}
		
		> a {
			align-self: center;
			margin-top: 42rem;
			color: ${({theme}) => theme.COLORS.PINK};
		}

		
	`	

export const Background = styled.div`
	background: url(${backgroundCinema}) no-repeat center center;
	flex: 1;
	background-size: cover;
`;
