import React from 'react'
import { EEnemyPosition } from './types'
import * as Styled from './Style'

type TProps = {
  position: EEnemyPosition
  online: boolean
}

export function Enemy({position, online = false}: TProps) {
  return (
    <>
      <Styled.Enemy>
        <img src="img/char.png" alt="" />
        <Styled.EnemyBody position={position}>
          {online && <img src={`img/enemy${position}.png`} alt="" />}
        </Styled.EnemyBody>
      </Styled.Enemy>
    </>
  )
}
