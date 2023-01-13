import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	gap: 16rem;
	border-radius: 10rem;
	margin-bottom: 8rem;
	padding: 16rem;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

	> input {
		font-size: 16rem;
    font-weight: 400;
		line-height: 21rem;
		width: 100%;
		text-align: left;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      
    }
	}
  
	> svg {
    width: 20rem;
		height: 20rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
	}
`;
