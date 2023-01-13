import styled from 'styled-components';

export const Container = styled.button`
	width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${({theme}) => theme.COLORS.PINK};
  
	line-height: 21rem;
  font-weight: 400;
  padding: 16px 32px;
  border: 0;
	border-radius: 10px;
`;
