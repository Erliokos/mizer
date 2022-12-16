import React, { Dispatch, SetStateAction, useState } from 'react'
import { Card as CType, CardOnTable } from '../../generated/operations'
import { Card } from '../Card/Card'
import * as Styled from './Style'

type TProps = {
  cards: CType[]
  setCardsOnTable: Dispatch<SetStateAction<CardOnTable[]>>
}

export function Player({ cards, setCardsOnTable }: TProps) {
  const [playerCards, setPlayerCards] = useState<CType[]>(cards)
  return (
    <Styled.Container>
      {playerCards.map(item => (
        <Styled.Card key={item.type + 'style'}>
          <Card key={item.type} {...item} setCards={setPlayerCards} setCardsOnTable={setCardsOnTable}/>
        </Styled.Card>
      ))}
    </Styled.Container>
  )
}
