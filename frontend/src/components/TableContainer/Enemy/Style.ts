
import styled, { css } from "styled-components";
import { EEnemyPosition } from "./types";


export const Enemy = styled.div`
  position: relative;
  width: 268px;
  height: 268px;
  margin: 0 64px;
`

export const EnemyBody = styled.div<{ position: EEnemyPosition }>`
  position: absolute;
  top: 0;
  ${(({ position }) => {
    return position === EEnemyPosition.left 
      ? css`
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        `
      : css`
      position: absolute;
      right: 0;
      top: 0;
      z-index: 10;
      `
  })}
`
