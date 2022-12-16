const {buildSchema} = require('graphql')

const schema = buildSchema(`
    
    type User {
        id: ID
        username: String
    }
    
    input UserInput {
        id: ID
        username: String!
    }
    
    
    type Card {
        type: String
    }
    
    type CardOnTable {
        position: String
        card: Card
    }
    
    type Game {
        cardOnTable: [CardOnTable]
        userCards: [Card]
    }
    
    type Query {
        getAllUsers: [User]
        getUser(id: ID): User
        getGame(id: ID): Game
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`)

module.exports = schema
