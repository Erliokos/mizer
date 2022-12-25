import React, { useState } from 'react';
import * as Styled from './Style';
import * as GlobalStyled from '../../GlobalStyle';

export function ChatInput() {
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(prev => '');
  };

  return (
    <Styled.ChatContainer>
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <form onSubmit={handleSubmit}>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <GlobalStyled.Input onChange={handleChange} value={message} />
      </form>
    </Styled.ChatContainer>
  );
}
