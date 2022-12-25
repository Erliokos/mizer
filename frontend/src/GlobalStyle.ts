import styled, { createGlobalStyle } from 'styled-components';

export const Root = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }
  body {
    overflow: hidden;
  }
`;
export const Body = styled.div`
  position: absolute;
  background-color: rgb(77,77,77);
  width: 100vw;
  height: 100vh;
  z-index: -10;
`;

export const Input = styled.input`
  width: 450px;
  height: 24px;
  background-color: rgb(204,204,204);
  outline: none;
  border: none;
  color: rgb(77,77,77);
  font-size: 12px;
  border-radius: 2px;
`;

