import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import {
  ECardType,
  EPlayer,
  ICardOnTable
} from '../../common/types/globalTypes'
import { GET_GAME } from '../../graphql/query/users'
import { ChatWindow } from '../Chat/ChatWindow/ChatWindow'
import { Player } from '../Player/Player'
import { EEnemyPosition } from '../TableContainer/Enemy/types'
import { TableContainer } from '../TableContainer/TableContainer'
import * as Styled from './Style'

type TProps = {
  id: string
}

export function Game({id}: TProps) {
  
  const {data} = useQuery(GET_GAME, {variables:{id}, pollInterval: 1000})
  const [cardsOnTable, setCardsOnTable] = useState<ICardOnTable[]>([])

  useEffect(()=>{
    const cards = (data?.getGame?.cardOnTable ?? []).map((item: ICardOnTable) => {
      const cardOnTable: ICardOnTable = {
        position: EPlayer.enemyLeft,
        card: {type: ECardType.C_10}
      }
      return cardOnTable
    })
    setCardsOnTable(cards)
  },[data])

  return (
    <Styled.Container>
      <ChatWindow />
      <TableContainer cards={cardsOnTable} />
      <Player cards={[]} setCardsOnTable={setCardsOnTable}/>
    </Styled.Container>
  )
}
