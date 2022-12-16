const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const {getGame} = require('./controllers/gameControllers')
const cors = require('cors')
const schema = require('./shema')
const { graphql, GraphQLError } = require('graphql')
const users = []

const app = express()
app.use(cors())

const createUser = (input) => {
    const id = input.username
    return {
        id
    }
}
const root = {
    getAllUsers: () => {
        return users
    },
    getUser: ({id}) => {
        return users.find(user => user.id == id)
    },
    createUser: ({input}) => {
        if(users.length > 2) return GraphQLError
        const user = createUser(input);
        if(users.filter(item => item.id === user.id).length > 0) return user
        users.push(user)
        console.log(users);
        
        return user
    },
    getGame
}


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(4000, () => console.log('Сервер еще не отвалился на 4000'))
