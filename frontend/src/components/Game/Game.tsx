import React, { useEffect, useState } from 'react'
import { useGetGameQuery } from '../../generated/hooks'
import { Card, CardOnTable } from '../../generated/operations'
import { ChatWindow } from '../Chat/ChatWindow/ChatWindow'
import { Player } from '../Player/Player'
import { TableContainer } from '../TableContainer/TableContainer'
import * as Styled from './Style'

type TProps = {
  id: string
}

export function Game({ id }: TProps) {
  
  const { data, loading } = useGetGameQuery({ variables: { id }, pollInterval: 1000 })
  const [cardsOnTable, setCardsOnTable] = useState<CardOnTable[]>([])
  const [userCards, setUserCards] = useState<Card[]>([])

  useEffect(() => {
    const usercards = data?.getGame?.userCards ?? []
    setUserCards(usercards)
    const cardsontable = data?.getGame.cardOnTable ?? [] 
    setCardsOnTable(cardsontable)
  }, [data])

  return (
    <Styled.Container>
      <ChatWindow />
      <TableContainer cards={cardsOnTable} />
     {loading && <Player cards={userCards} setCardsOnTable={setCardsOnTable} />}
    </Styled.Container>
  )
}
