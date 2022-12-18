import React from 'react'
import * as Styled from './Style'

export type ButtonProps = {
  text: string
  onClick: () => void
}
 
export default function Button({text, onClick}: ButtonProps) {
  return (
    <Styled.Root onClick={onClick}>{text}</Styled.Root>
  )
}
