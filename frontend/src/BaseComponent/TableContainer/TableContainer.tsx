import React, { useState } from 'react';
import { useGetAllUserQuery } from '../../generated/hooks';
import { CardOnTableFragment, User } from '../../generated/operations';
import { Enemy } from './Enemy/Enemy';
import { EEnemyPosition } from './Enemy/types';
import { Table } from './Table/Table';
import { TableUser } from './Table/types';
import * as Styled from './Style';

interface TProps {
  user: User;
  cards: CardOnTableFragment[];
  message?: string;
  prikup: boolean;
  userTurn: boolean;
};

export function TableContainer({ cards, user, message, prikup, userTurn }: TProps) {
  const [players, setPlayers] = useState<TableUser>();
  useGetAllUserQuery({
    pollInterval: 1000,
    onCompleted(data) {
      const Player = user;
      const EnemyLeft = data.getAllUsers.filter(item => item?.order === (Player?.order === 2 ? 0 : (Player?.order ?? 0) + 1))[0];
      const EnemyRight = data.getAllUsers.filter(item => item?.order !== Player?.order && item?.order !== EnemyLeft?.order)[0];
      setPlayers({ Player, EnemyLeft, EnemyRight });
    },
  });

  return (
    <Styled.Container>
      <Enemy position={EEnemyPosition.left} online={players?.EnemyLeft != null} player={players?.EnemyLeft} />
      <Table cards={cards} players={players} message={message} prikup={prikup} userTurn={userTurn} />
      <Enemy position={EEnemyPosition.right} online={players?.EnemyRight != null} player={players?.EnemyRight} />
    </Styled.Container>
  );
}
