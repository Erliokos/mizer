import React, { Dispatch, SetStateAction, useState } from 'react'
import { ICard, ICardOnTable } from '../../common/types/globalTypes'
import { Card } from '../Card/Card'
import * as Styled from './Style'

type TProps = {
  cards: ICard[]
  setCardsOnTable: Dispatch<SetStateAction<ICardOnTable[]>>
}

export function Player({ cards, setCardsOnTable }: TProps) {
  const [playerCards, setPlayerCards] = useState<ICard[]>(cards)
  return (
    <Styled.Container>
      {playerCards.map(item => (
        <Styled.Card>
          <Card {...item} setCards={setPlayerCards} setCardsOnTable={setCardsOnTable}/>

        </Styled.Card>
      ))}
    </Styled.Container>
  )
}
