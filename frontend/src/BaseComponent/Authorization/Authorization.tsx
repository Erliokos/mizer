import React, { Dispatch, SetStateAction, useState } from 'react';
import * as Styled from './Style';
import * as GlobalStyled from '../../GlobalStyle';
import { useCreateUserMutation } from '../../generated/hooks';
import { User } from '../../generated/operations';
import { ApolloError } from '@apollo/client';

interface TProps {
  setUser: Dispatch<SetStateAction<User | undefined>>;
};

export function Authorization({ setUser }: TProps) {
  const [value, setValue] = useState<string>('');
  const [errors, setErrors] = useState<string | null>(null);

  const [createUser] = useCreateUserMutation();

  const onCreateUser = async (values: string) => {
    return createUser({ variables: { input: { username: values } } });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreateUser(value).then((data) => {
      setUser(data?.data?.createUser ?? undefined);
    }).catch((error: ApolloError)=>{
      setErrors(error.message);
    });
  };

  const message = errors ? errors : 'ВВЕДИТЕ ИМЯ';
  const color = errors ? 'red' : 'white';

  return (
    <Styled.AuthorizationCantainer>
      <Styled.Name color={color}>{message}</Styled.Name>
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <form onSubmit={handleSubmit}>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <GlobalStyled.Input onChange={handleChange} value={value} />
      </form>
    </Styled.AuthorizationCantainer>
  );
}
