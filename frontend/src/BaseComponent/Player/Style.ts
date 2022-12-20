import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Container = styled.div`
  width: 100vw;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
  padding: 16px;
`

export const Card = styled.div`
  width: 100px;
  height: 150px;
  margin-right: 16px;
`
export const CardPrikup = styled.div`
  width: 50px;
  height: 100px;
  margin-right: 16px;
`


export const Prikup = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 150px;
  bottom: 300px;
  z-index: 20;
`
