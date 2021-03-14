import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #000;
  }
  .score {
    color: #000;
    font-size: 2rem;
    margin: 0;
  }
  .card{
    border:1px solid #000;
  }
  .number{
      color:#000;
      font-size:24px;
  }
  .question{
      color:#000;
      font-size:32px;
  }
  h1 {
    font-family: Fascinate Inline;
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    color:#000;
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;