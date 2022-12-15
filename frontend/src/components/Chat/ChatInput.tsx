import React, { useState } from 'react'
import * as Styled from './Style'

export function ChatInput() {

  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage(prev => '')
  }

  return (
    <Styled.ChatContainer>
      <form onSubmit={handleSubmit}>
      <Styled.Input onChange={handleChange} value={message}/>
      </form>
    </Styled.ChatContainer>
  )
}
