import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Button } from '../../common/ui-kit/Button'
import { usePutCardMutation, usePutPrikupMutation } from '../../generated/hooks'
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
  disable: boolean
  prikupSave: boolean
}

export function Player({
  user,
  cards,
  setCardsOnTable,
  setUserCards,
  disable = false,
  prikupSave
}: TProps) {
  const [prikup, setPrikup] = useState<CType[]>([])

  const [disableWithInitPrikup, setDisableWithInitPrikup] = useState<boolean>(false)
  

  useEffect(()=>{
    setDisableWithInitPrikup(false)
  },[disable, cards])

  const [putPrikup] = usePutPrikupMutation()
  const [putCard] = usePutCardMutation()

  const handleClickPutPrikup = () => {
    setDisableWithInitPrikup(false)
    putPrikup({
      variables: { input: { prikup: prikup.map(item => item.type) } }
    }).then()
  }

  const handleChangeCardsOnTable = (type: ECardType) => {
    if (prikupSave && cards.length > 9) {
      setPrikup(prev => {
        const cards = [...prev, { type }]
        if (cards.length === 2) setDisableWithInitPrikup(true)
        return cards
      })
      return
    }
    putCard({variables: {input:{type}}}).then()
    setDisableWithInitPrikup(true)
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
    <Styled.Wrapper>
      {prikup.length > 0 && prikupSave && (
        <>
          {prikup.length === 2 && <Button text={'Положить'} onClick={handleClickPutPrikup}/>}
          <Styled.Prikup>
            {prikup.map(item => (
              <Styled.CardPrikup key={item.type + 'styleType'}>
                <Card
                  key={item.type}
                  {...item}
                  setCards={setPrikup}
                  handleChangeCardsOnTable={(type)=>{
                    setDisableWithInitPrikup(false)
                    setUserCards(prev => [...prev, {type}])}}
                />
              </Styled.CardPrikup>
            ))}
          </Styled.Prikup>
        </>
      )}

      <Styled.Container>
        {cards.filter(item => !prikup.map(t => t.type).includes(item.type)).map(item => (
          <Styled.Card key={item.type + 'style'}>
            <Card
              disable={disable || disableWithInitPrikup}
              key={item.type}
              {...item}
              setCards={setUserCards}
              handleChangeCardsOnTable={handleChangeCardsOnTable}
            />
          </Styled.Card>
        ))}
      </Styled.Container>
    </Styled.Wrapper>
  )
}
