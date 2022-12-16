import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import * as Styled from './Style'
import * as GlobalStyled from '../../GlobalStyle'
import { useCreateUserMutation } from '../../generated/hooks'
import { ApolloError } from '@apollo/client'

type TProps = {
  setUserId: Dispatch<SetStateAction<string | undefined>>
}

export function Authorization({ setUserId }: TProps) {
  
  
  const [value, setValue] = useState<string>('')
  const [errors, setErrors] = useState<string | null>(null)
  
  console.log(errors);

  const [createUser] = useCreateUserMutation()

  const onCreateUser = async (values: string) => {
    return createUser({ variables: { input: { username: values } } })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onCreateUser(value).then((data) => {
      setUserId(data?.data?.createUser?.id ?? undefined)
    }).catch((error: ApolloError)=>{
      console.log(error);
      setErrors(error.message)
    })
  }

  const message = errors ? errors : 'ВВЕДИТЕ ИМЯ'
  const color = errors ? 'red' : 'white'

  return (
    <Styled.AuthorizationCantainer>
      <Styled.Name color={color}>{message}</Styled.Name>
      <form onSubmit={handleSubmit}>
        <GlobalStyled.Input onChange={handleChange} value={value} />
      </form>
    </Styled.AuthorizationCantainer>
  )
}
