const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const {getGame, createUser, getUser, getAllUsers, passPrikup, getPrikup, putPrikup, putCard} = require('./controllers/gameControllers')
const cors = require('cors')
const schema = require('./shema')
const { graphql, GraphQLError } = require('graphql')

const app = express()
app.use(cors())

const root = {
    getAllUsers,
    getUser,
    createUser,
    getGame,
    passPrikup,
    getPrikup,
    putPrikup,
    putCard
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
}))

app.listen(4000, () => console.log('Сервер еще не отвалился на 4000'))
