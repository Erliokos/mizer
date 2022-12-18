import React, { Dispatch, SetStateAction, useState } from 'react'
import { useGetAllUserQuery } from '../../generated/hooks'
import { Card, CardOnTableFragment, User } from '../../generated/operations'
import { Enemy } from './Enemy/Enemy'
import { EEnemyPosition } from './Enemy/types'
import { Table } from './Table/Table'
import { TableUser } from './Table/types'
import * as Styled from './Style'

type TProps = {
  user: User
  cards: CardOnTableFragment[]
  message?: string
  prikup: boolean
  userTurn: boolean
  setUserCards: Dispatch<SetStateAction<Card[]>>
}

export function TableContainer({ cards, user, message, prikup, userTurn, setUserCards}: TProps) {
  const [players, setPlayers] = useState<TableUser>()
  useGetAllUserQuery({
    pollInterval: 1000,
    onCompleted(data) {
      const Player = user
      console.log((Player?.order === 2 ? 0 : Player?.order ?? 0 + 1));
      const EnemyLeft = data.getAllUsers.filter(item => item?.order === (Player?.order === 2 ? 0 : (Player?.order ?? 0) + 1))[0]
      const EnemyRight = data.getAllUsers.filter(item => item?.order !== Player?.order && item?.order !== EnemyLeft?.order)[0]
      setPlayers({Player, EnemyLeft, EnemyRight})
    }
  })

  return (
    <Styled.Container>
      <Enemy position={EEnemyPosition.left} online={players?.EnemyLeft != null} player={players?.EnemyLeft} />
      <Table cards={cards} players={players} message={message} prikup={prikup} userTurn={userTurn} setUserCards={setUserCards}/>
      <Enemy position={EEnemyPosition.right} online={players?.EnemyRight != null} player={players?.EnemyRight}  />
    </Styled.Container>
  )
}
