import { gql } from '@apollo/client'

export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      username
    }
  }
`

export const GET_ONE_USER = gql`
  query getUser($id: ID) {
    getUser(id: $id) {
      id
      username
    }
  }
`

export const GET_GAME = gql`
  query getGame($id: ID) {
    getGame(id: $id) {
      userCards {
        type
      }
      cardOnTable {
        position
        card {
          type
        }
      }
    }
  }
`
