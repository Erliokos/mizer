import React from 'react';
import * as Styled from './Style';

export interface ButtonProps {
  text: string;
  onClick: () => void;
};

export function Button({ text, onClick }: ButtonProps) {
  return (
    <Styled.Root onClick={onClick}>{text}</Styled.Root>
  );
}
