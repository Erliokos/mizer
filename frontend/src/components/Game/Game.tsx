import React, { useEffect, useState } from 'react'
import { useGetGameQuery } from '../../generated/hooks'
import { Card, CardOnTable, User } from '../../generated/operations'
import { ChatWindow } from '../Chat/ChatWindow/ChatWindow'
import { Player } from '../Player/Player'
import { TableContainer } from '../TableContainer/TableContainer'
import * as Styled from './Style'

type TProps = {
  user: User
}

export function Game({ user }: TProps) {
  const [cardsOnTable, setCardsOnTable] = useState<CardOnTable[]>([])
  const [userCards, setUserCards] = useState<Card[]>([])

  useGetGameQuery({
    variables: { id: user.id },
    pollInterval: 1000,
    onCompleted: data => {
      setUserCards(prev => data?.getGame?.userCards ?? [])
      setCardsOnTable(prev => data?.getGame.cardOnTable ?? [])
    }
  })

  return (
    <Styled.Container>
      <ChatWindow />
      <TableContainer user={user} cards={cardsOnTable} />
      <Player user={user} cards={userCards} setCardsOnTable={setCardsOnTable} setUserCards={setUserCards}/>
    </Styled.Container>
  )
}
