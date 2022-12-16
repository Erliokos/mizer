import React, { useState } from 'react'
import {
  ECardType,
  EPlayer,
  ICardOnTable
} from '../../common/types/globalTypes'
import { ChatWindow } from '../Chat/ChatWindow/ChatWindow'
import { Player } from '../Player/Player'
import { TableContainer } from '../TableContainer/TableContainer'
import * as Styled from './Style'

export function Game() {
  const cardsOnTableFromBack: ICardOnTable[] = [
    {
      position: EPlayer.enemyLeft,
      card: { type: ECardType.C_A }
    },
    {
      position: EPlayer.enemyRight,
      card: { type: ECardType.S_A }
    },
  ]

  const [cardsOnTable, setCardsOnTable] = useState<ICardOnTable[]>(cardsOnTableFromBack)

  const myCards = [
    { type: ECardType.D_7 },
    { type: ECardType.D_8 },
    { type: ECardType.D_9 }
  ]

  return (
    <Styled.Container>
      <ChatWindow />
      <TableContainer cards={cardsOnTable} />
      <Player cards={myCards} setCardsOnTable={setCardsOnTable}/>
    </Styled.Container>
  )
}
