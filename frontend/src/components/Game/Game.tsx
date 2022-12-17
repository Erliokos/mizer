import React, { useState } from 'react'
import { useGetGameQuery, UserFragmentDoc } from '../../generated/hooks'
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
  const [userMove, setUserMove] = useState<User | null>()
  const [message, setMessage] = useState<string | undefined>()

  useGetGameQuery({
    variables: { id: user.id },
    pollInterval: 1000,
    onCompleted: data => {
      setUserCards(() => data?.getGame.userCards ?? [])
      setCardsOnTable(() => data?.getGame.cardOnTable ?? [])
      setUserMove(() => data.getGame.userMove)
      setMessage(data.getGame.message ?? undefined)
    }
  })

  return (
    <Styled.Container>
      <ChatWindow />
      <TableContainer user={user} cards={cardsOnTable} message={message} />
      <Player disable={user.order !== userMove?.order} user={user} cards={userCards} setCardsOnTable={setCardsOnTable} setUserCards={setUserCards}/>
    </Styled.Container>
  )
}
