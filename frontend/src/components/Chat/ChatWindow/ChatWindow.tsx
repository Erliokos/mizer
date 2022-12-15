import React from 'react'
import * as Styled from './Style'

export function ChatWindow() {

  const data = {
    message: 
      [
        "игра начата",
        "режим игры не мизер"
      ]
  }
  
  return (
    <Styled.Container>
      {data.message.map(item => <div key={item}>{item}</div>)}
    </Styled.Container>
  )
}
