import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  'header'
  'main';
  
  
  > main {
    padding: 50px 134px 38px;
    grid-area: main;
    overflow-y: auto;

    div {
      display: flex;
      white-space: nowrap;
      justify-content: space-between;
      align-items: center;
      
      button {
        width: fit-content;
        align-self: center;
      }
    }

    section {
      margin-block: 36px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }
  

`