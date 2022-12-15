import  styled, {createGlobalStyle} from "styled-components";

export const Root = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }
`
export const Body = styled.div`
  position: absolute;
  background-color: rgb(77,77,77);
  width: 100vw;
  height: 100vh;
  z-index: -10;
`
