import React from 'react'
import { EPlayer, ICardOnTable } from '../../../common/types/globalTypes'
import { Card } from '../../Card/Card'
import * as Styled from './Style'

type TProps = {
  cards: ICardOnTable[]
}

export function Table({ cards }: TProps) {
  const EnemyLeft = cards.find(item => item.position === EPlayer.enemyLeft)
  const EnemyRight = cards.find(item => item.position === EPlayer.enemyRight)
  const Player = cards.find(item => item.position === EPlayer.player)
  return (
    <Styled.Table>
      <Styled.EnemyLeft>
        {EnemyLeft && <Card type={EnemyLeft.card.type} />}
      </Styled.EnemyLeft>
      <Styled.EnemyRight>
        {EnemyRight && <Card type={EnemyRight.card.type} />}
      </Styled.EnemyRight>
      <Styled.Player>
        {Player && <Card type={Player.card.type} />}
      </Styled.Player>
      <img src="img/table.png" style={{ height: '100%' }} alt={''} />
    </Styled.Table>
  )
}
