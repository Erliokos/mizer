import styled from "styled-components";

export const Table = styled.div`
  position: relative;
  height: 450px;
  width: 450px;
  z-index: 11;
`

export const EnemyLeft = styled.div`
  position: absolute;
  top: 169px;
  left: 16px;
  width: 80px;
  height: 113px;
`
export const EnemyRight = styled.div`
  position: absolute;
  top: 169px;
  right: 16px;
  width: 80px;
  height: 113px;
`
export const Player = styled.div`
  position: absolute;
  bottom: 16px;
  left: 185px;
  width: 80px;
  height: 113px;
`
export const ImgWrapper = styled.img`
  width: 100%;
  height: 100%;
`

export const Message = styled.div`
  position: absolute;
  top: 200px;
  width: 100%;
  font-size: 24px;
  font-weight: lighter;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  text-align: center;

`
