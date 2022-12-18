import React, { Dispatch, SetStateAction, useState } from 'react'
import Button from '../../../common/ui-kit/Button'
import { useGetPrikupMutation, usePassPrikupMutation } from '../../../generated/hooks'
import { Card as CType, CardOnTable } from '../../../generated/operations'
import { Card } from '../../Card/Card'
import * as Styled from './Style'
import { TableUser } from './types'

type TProps = {
  cards: CardOnTable[]
  players?: TableUser
  message?: string
  prikup: boolean
  userTurn: boolean
  setUserCards: Dispatch<SetStateAction<CType[]>>
}

export function Table({ cards, players, message, prikup, userTurn, setUserCards }: TProps) {
  const EnemyLeftCard = cards.find(
    item => item.position.id === players?.EnemyLeft?.id
  )
  const EnemyRightCard = cards.find(
    item => item.position.id === players?.EnemyRight?.id
  )
  const PlayerCard = cards.find(
    item => item.position.id === players?.Player?.id
  )
  const [vote, setVote] = useState<boolean>(false)
  const [passPrikup] = usePassPrikupMutation()
  const [getPrikup] = useGetPrikupMutation()

  const handleClickTake = async () => {
    if(vote) return
    setVote(true)
    await getPrikup({onCompleted(data) {
      setUserCards(prev => [...prev, ...data.getPrikup])
    },})
  }
  const handleClickPass = async () => {
    if(vote) return
    setVote(true)
    await passPrikup()
  }

  return (
    <Styled.Table>
      {prikup && (
        <Styled.Prikup>
          <img src={'img/prikup.png'} alt={'prikup'} />
          {userTurn && (
            <>
              <Button onClick={handleClickTake} text={'принять'} />
              <Button onClick={handleClickPass} text={'отклонить'} />
            </>
          )}
        </Styled.Prikup>
      )}
      <Styled.Message>{message}</Styled.Message>
      <Styled.EnemyLeft>
        {EnemyLeftCard && <Card type={EnemyLeftCard.card.type} />}
      </Styled.EnemyLeft>
      <Styled.EnemyRight>
        {EnemyRightCard && <Card type={EnemyRightCard.card.type} />}
      </Styled.EnemyRight>
      <Styled.Player>
        {PlayerCard && <Card type={PlayerCard.card.type} />}
      </Styled.Player>
      <img src="img/table.png" style={{ height: '100%' }} alt={''} />
    </Styled.Table>
  )
}
