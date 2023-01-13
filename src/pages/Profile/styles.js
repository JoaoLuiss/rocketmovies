import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	> div {
		width: 100%;
		height: 144px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		background-color: ${({ theme }) => theme.COLORS.PINK}08;
		
		padding-left: 144px;
		
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 8px;
			color: ${({ theme }) => theme.COLORS.PINK};
		}
	}
`;

export const Form = styled.form`
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  margin: 0 auto;
  margin-top: -93px;
	padding-bottom: 32px;

  div:nth-child(4) {
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  width: fit-content;
  position: relative;
  margin-bottom: 64px;

	img {
		width: 186px;
		height: 186px;

    border: 1px solid  ${({ theme }) => theme.COLORS.GRAY_500 };
    border-radius: 50%;
	}

	input {
		display: none;
	}

	label {
		width: 48px;
		height: 48px;
		background-color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;

    border-radius: 50%;
	}

	svg {
		width: 20px;
		height: 20px;
	}
`;
