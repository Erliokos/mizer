import React, { Dispatch, SetStateAction } from 'react'
import { Card as CardType, CardOnTable, ECardType } from '../../generated/operations'
import * as Styled from './Style'

type CardProps = {
  type: ECardType
  disable?: boolean
  setCards?: Dispatch<SetStateAction<CardType[]>>
  setCardsOnTable?: Dispatch<SetStateAction<CardOnTable[]>>
}

export function Card({
  type,
  setCards,
  disable = false,
  setCardsOnTable
}: CardProps) {
  const handleClick = () => {
    if (disable || !setCards || !setCardsOnTable) return
    setCards(prev => prev.filter(item => item.type !== type))
    setCardsOnTable(prev => {
      const cardOnTable: CardOnTable = {
        position: {id: 'user', username: 'user', order: 0},
        card: { type }
      }
      return [...prev, cardOnTable]
    })
  }
  return (
    <Styled.CardContainer onClick={handleClick}>
      <img src={`img/CARD/${type}.png`} alt={type} style={{ height: '100%' }} />
    </Styled.CardContainer>
  )
}
