import React from 'react'
import { ChatInput } from '../Chat/ChatInput'
import { Time } from '../Time/Time'
import * as Styled from './Style'

export function Navbar() {
  return (
    <>
    <Styled.Container>
      <Styled.LogoBlock>
        <img src={'img/logo.png'} alt="логотип" />
        <div>МИЗЕР</div>
        </Styled.LogoBlock>
        <Time/>
    </Styled.Container>
    <ChatInput/>
    </>
  )
}

