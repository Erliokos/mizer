import React, { useState } from 'react'
import { useGetAllUserQuery } from '../../generated/hooks'
import { CardOnTableFragment, User } from '../../generated/operations'
import { Enemy } from './Enemy/Enemy'
import { EEnemyPosition } from './Enemy/types'
import { Table } from './Table/Table'
import { TableUser } from './Table/types'
import * as Styled from './Style'

type TProps = {
  user: User
  cards: CardOnTableFragment[]
}

export function TableContainer({ cards, user }: TProps) {
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

  console.log(players);
  

  return (
    <Styled.Container>
      <Enemy position={EEnemyPosition.left} online={players?.EnemyLeft != null} player={players?.EnemyLeft} />
      <Table cards={cards} players={players}/>
      <Enemy position={EEnemyPosition.right} online={players?.EnemyRight != null} player={players?.EnemyRight}  />
    </Styled.Container>
  )
}
