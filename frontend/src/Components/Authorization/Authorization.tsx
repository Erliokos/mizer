import { useMutation } from '@apollo/client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { CREATE_USER } from '../../graphql/mutation/users'
import * as Styled from './Style'
import * as GlobalStyled from '../../GlobalStyle'

type TProps = {
  setUserId: Dispatch<SetStateAction<string | undefined>>
}

export function Authorization({ setUserId }: TProps) {
  const [value, setValue] = useState<string>('')

  const [createUser] = useMutation(CREATE_USER)

  const onCreateUser = async (values: string) => {
    return createUser({ variables: { input: { username: values } } })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onCreateUser(value).then(({ data }) => {
      setUserId(data.createUser.id)
    })
  }

  return (
    <Styled.AuthorizationCantainer>
      <Styled.Name>ВВЕДИТЕ ИМЯ</Styled.Name>
      <form onSubmit={handleSubmit}>
        <GlobalStyled.Input onChange={handleChange} value={value} />
      </form>
    </Styled.AuthorizationCantainer>
  )
}
