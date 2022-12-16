import React from 'react'
import { CardOnTableFragment } from '../../generated/operations'
import { Enemy } from './Enemy/Enemy'
import { EEnemyPosition } from './Enemy/types'
import * as Styled from './Style'
import { Table } from './Table/Table'

type TProps = {
  cards: CardOnTableFragment[]
}

export function TableContainer({cards}: TProps) {
  return (
    <Styled.Container>
      <Enemy position={EEnemyPosition.left} online={false}/>
      <Table cards={cards}/>
      <Enemy position={EEnemyPosition.right} online={false}/>
    </Styled.Container>
  )
}
