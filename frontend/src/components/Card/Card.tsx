import React, { Dispatch, SetStateAction } from 'react'
import {
  ECardType,
  EPlayer,
  ICard,
  ICardOnTable
} from '../../common/types/globalTypes'
import * as Styled from './Style'

type CardProps = {
  type: ECardType
  disable?: boolean
  setCards?: Dispatch<SetStateAction<ICard[]>>
  setCardsOnTable?: Dispatch<SetStateAction<ICardOnTable[]>>
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
      const cardOnTable: ICardOnTable = {
        position: EPlayer.player,
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
