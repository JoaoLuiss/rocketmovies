import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px 62px auto;
  grid-template-areas: 
  'header'
  'back'
  'article';

  > div.back {
    grid-area: 'back';
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: 124px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.COLORS.PINK };
    }
  }

  > article {
    grid-area: 'article';
    margin-inline: 124px;
    padding-bottom: 24px;
    overflow-y: auto;

    div.title-and-rating {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 20px;

      h1 {
        font-size: 36rem;
        font-weight: 500;
      }

      svg {
        width: 20px;        
        height: 20px;        
      }

      /* button {
        width: fit-content;
        justify-self: end;
        margin: 0;
        margin-left: auto;
        margin-right: 8px;
      } */
    }

    div.meta-data {
      display: flex;
      align-items: center;
      gap: 24px;
      margin-top: 26px;

      img {
        width: 16px;
        height: 16px;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500 };
        border-radius: 50%;
      }

      span {
        display: flex;
        align-items: center;
        gap: 8px;

        svg{
          color: ${({ theme }) => theme.COLORS.PINK };
        }
      }
    }

    div.tag-list {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 40px;

      > div {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700 };
      }
    }

    p.movie-note-description {
      margin-top: 40px;
    }
  }
`