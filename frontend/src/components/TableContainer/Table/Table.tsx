import React from 'react'
import { CardOnTable } from '../../../generated/operations'
import { Card } from '../../Card/Card'
import * as Styled from './Style'
import { TableUser } from './types'

type TProps = {
  cards: CardOnTable[]
  players?: TableUser
}

export function Table({ cards, players }: TProps) {
  const EnemyLeftCard = cards.find(item => item.position.id === players?.EnemyLeft?.id)
  const EnemyRightCard = cards.find(item => item.position.id === players?.EnemyRight?.id )
  const PlayerCard = cards.find(item => item.position.id === players?.Player?.id)
  return (
    <Styled.Table>
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
