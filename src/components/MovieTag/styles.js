import styled from "styled-components";

export const Container = styled.span`
  width: fit-content;
  font-family: 'Roboto', sans-serif;
  font-size: 12rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600 };
  color: ${({ theme }) => theme.COLORS.WHITE_200 };

  padding: 4px 16px;
  border-radius: 8px;

`