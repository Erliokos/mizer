import React from 'react';
import { EEnemyPosition } from './types';
import { User } from '../../../generated/operations';
import * as Styled from './Style';

interface TProps {
  position: EEnemyPosition;
  online: boolean;
  player: User | null | undefined;
};

export function Enemy({ position, online = false, player }: TProps) {
  return (
    <>
      <Styled.Enemy>
        <Styled.Name>{player?.id}</Styled.Name>
        <img src="img/char.png" alt="" />
        <Styled.EnemyBody position={position}>
          {online && <img src={`img/enemy${position}.png`} alt="" />}
        </Styled.EnemyBody>
      </Styled.Enemy>
    </>
  );
}
