import React, { Dispatch, SetStateAction } from 'react'
import { Card as CardType, ECardType } from '../../generated/operations'
import * as Styled from './Style'

type CardProps = {
  type: ECardType
  order: number
  disable?: boolean
  setCards?: Dispatch<SetStateAction<CardType[]>>
  setCardTypeTwo?: Dispatch<SetStateAction<string | null>>
  setCardTypeOne?: Dispatch<SetStateAction<string | null>>
  handleChangeCardsOnTable?: (type: ECardType, order: number) => void
}

export function Card({
  type,
  order,
  setCards,
  setCardTypeOne,
  setCardTypeTwo,
  disable = false,
  handleChangeCardsOnTable
}: CardProps) {

  const handleClick = () => {
    if (disable || !setCards) return
    setCards(prev => prev.filter(item => item.type !== type))
    handleChangeCardsOnTable?.(type, order)
  }
  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    setCardTypeOne?.(p => type)
  }
  const handleDragLeave = (e: React.DragEvent<HTMLImageElement>) => {

  }
  const handleDragEnd = (e: React.DragEvent<HTMLImageElement>) => {

  }
  const handleDragOver = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault()
    setCardTypeTwo?.(type)
  }

  return (
    <Styled.CardContainer onClick={handleClick}>
      <img
       onDragStart={handleDragStart}
       onDragLeave={handleDragLeave}
       onDragEnd={handleDragEnd}
       onDragOver={handleDragOver}
       onDrop={handleDrop}
       draggable={true}
       src={`img/CARD/${type}.png`} 
       alt={type}
       style={{ height: '100%' }} />
    </Styled.CardContainer>
  )
}
