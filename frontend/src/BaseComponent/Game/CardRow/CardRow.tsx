import React from 'react';
import { PCards } from '../../../generated/operations';
import { Card } from '../../Card/Card';
import * as Styled from '../Style';

export function CardRow({ pcards }: PCards) {
  if (pcards == null || pcards.length === 0) {return null;}
  return (
    <Styled.Row>
      {pcards.map(item => (
        <Card type={item.type} />
      ))}
    </Styled.Row>
  );
}
