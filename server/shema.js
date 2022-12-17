const {buildSchema} = require('graphql')

const schema = buildSchema(`

    type User {
        id: ID!
        username: String!
        order: Int!
    }
    enum ECardType {
        D_7
        D_8
        D_9
        D_10
        D_J
        D_Q
        D_K
        D_A
        H_7
        H_8
        H_9
        H_10
        H_J
        H_Q
        H_K
        H_A
        S_7
        S_8
        S_9
        S_10
        S_J
        S_Q
        S_K
        S_A
        C_7
        C_8
        C_9
        C_10
        C_J
        C_Q
        C_K
        C_A
    }
    
    input UserInput {
        id: ID
        username: String!
    }
    
    
    type Card {
        type: ECardType!
    }

    type CardOnTable {
        position: User!
        card: Card!
    }
    
    type Game {
        cardOnTable: [CardOnTable!]!
        userCards: [Card!]!
        userMove: User
        initPrikup: Boolean!
        message: String
    }
    
    type Query {
        getAllUsers: [User]!
        getUser(id: ID): User
        getGame(id: ID): Game!
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`)

module.exports = schema
