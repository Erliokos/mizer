import React, { Dispatch, SetStateAction } from 'react'
import { Card as CardType, ECardType } from '../../generated/operations'
import * as Styled from './Style'

type CardProps = {
  type: ECardType
  disable?: boolean
  setCards?: Dispatch<SetStateAction<CardType[]>>
  handleChangeCardsOnTable?: (type: ECardType) => void
}

export function Card({
  type,
  setCards,
  disable = false,
  handleChangeCardsOnTable
}: CardProps) {
  const handleClick = () => {
    if (disable || !setCards) return
    setCards(prev => prev.filter(item => item.type !== type))
    handleChangeCardsOnTable?.(type)
  }
  return (
    <Styled.CardContainer onClick={handleClick}>
      <img src={`img/CARD/${type}.png`} alt={type} style={{ height: '100%' }} />
    </Styled.CardContainer>
  )
}
