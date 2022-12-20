import React, { useState } from 'react'
import { useGetGameQuery } from '../../generated/hooks'
import {
  Card,
  CardOnTable,
  PCards,
  Points,
  User
} from '../../generated/operations'
import { ChatWindow } from '../Chat/ChatWindow/ChatWindow'
import { Player } from '../Player/Player'
import { TableContainer } from '../TableContainer/TableContainer'
import { CardRow } from './CardRow/CardRow'
import * as Styled from './Style'

type TProps = {
  user: User
}

export function Game({ user }: TProps) {
  const [cardsOnTable, setCardsOnTable] = useState<CardOnTable[]>([])
  const [userCards, setUserCards] = useState<Card[]>([])
  const [userMove, setUserMove] = useState<User | null>()
  const [message, setMessage] = useState<string | undefined>()
  const [isPrikup, setPrikup] = useState<boolean>(false)
  const [prikupSave, setPrikupSave] = useState<boolean>(false)
  const [playedCards, setPlayedCards] = useState<PCards[]>([])
  const [points, setPoints] = useState<Points[]>([])
  const [endGame, setEndGame] = useState<Boolean>(false)

  useGetGameQuery({
    variables: { id: user.id },
    pollInterval: 1000,
    onCompleted: data => {
      setUserCards(() => data?.getGame.userCards ?? [])
      setCardsOnTable(() => data?.getGame.cardOnTable ?? [])
      setUserMove(() => data.getGame.userMove)
      setMessage(data.getGame.message ?? undefined)
      setPrikup(data.getGame.initPrikup)
      setPrikupSave(data.getGame.prikupSave)
      setPlayedCards(data.getGame.playedCards)
      setPoints(prev => data.getGame.points)
      setEndGame(data.getGame.endGame)
    }
  })

  return (
    <Styled.Container>
      {endGame && (
        <Styled.Points>
          {points.map(item => (
            <div>
              {item.id}
              {item.point}
            </div>
          ))}
        </Styled.Points>
      )}
      <Styled.PlayedCards>
        {playedCards.map((item, index) => (
          <CardRow key={index} pcards={item.pcards}></CardRow>
        ))}
      </Styled.PlayedCards>

      <ChatWindow />
      <TableContainer
        user={user}
        cards={cardsOnTable}
        message={message}
        prikup={isPrikup}
        userTurn={user.order === userMove?.order}
      />
      <Player
        disable={user.order !== userMove?.order}
        user={user}
        cards={userCards}
        setCardsOnTable={setCardsOnTable}
        setUserCards={setUserCards}
        prikupSave={prikupSave}
      />
    </Styled.Container>
  )
}
