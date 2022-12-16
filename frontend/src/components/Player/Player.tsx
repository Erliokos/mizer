import React, { Dispatch, SetStateAction } from 'react'
import {
  Card as CType,
  CardOnTable,
  ECardType,
  User
} from '../../generated/operations'
import { Card } from '../Card/Card'
import * as Styled from './Style'

type TProps = {
  user: User
  cards: CType[]
  setUserCards: Dispatch<SetStateAction<CType[]>>
  setCardsOnTable: Dispatch<SetStateAction<CardOnTable[]>>
}

export function Player({ user, cards, setCardsOnTable, setUserCards }: TProps) {
  const handleChangeCardsOnTable = (type: ECardType) => {
    setCardsOnTable(prev => {
      const enemyCards = prev.filter(item => item.position.id !== user.id)
      const myCard: CardOnTable = {
        card: {
          type
        },
        position: user
      }
      return [...enemyCards, myCard]
    })
  }

  return (
    <Styled.Container>
      {cards.map(item => (
        <Styled.Card key={item.type + 'style'}>
          <Card
            key={item.type}
            {...item}
            setCards={setUserCards}
            handleChangeCardsOnTable={handleChangeCardsOnTable}
          />
        </Styled.Card>
      ))}
    </Styled.Container>
  )
}
