import React from 'react'
import { ChatWindow } from '../Chat/ChatWindow/ChatWindow'
import { Player } from '../Player/Player'
import { TableContainer } from '../TableContainer/TableContainer'
import * as Styled from './Style'

export function Game() {
  return (
    <Styled.Container>
      <ChatWindow/>
      <TableContainer/>
      <Player/>
    </Styled.Container>
  )
}
