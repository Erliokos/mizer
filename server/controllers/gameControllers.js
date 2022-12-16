const users = []

const getId = (input) => {
  const id = input.username.toUpperCase()
  return {
      id,
      username: input.username,
      order: users.length
  }
}

const getAllUsers = () => {
  return users
}
const getUser = ({id}) => {
  return users.find(user => user.id == id)
}
const createUser = ({input}) => {
  const oldUser = users.find(item => item.id === input.username.toUpperCase())
  if(oldUser) return oldUser
  if(users.length > 2) throw new Error('ВСЕ МЕСТА ЗАНЯТЫ')
  const user = getId(input);
  users.push(user)
  return user
}

const AllCards = {
  C_7:'C_7',
  C_8:'C_8',
  C_9:'C_9',
  C_10:'C_10',
  C_A:'C_A',
  C_J:'C_J',
  C_K:'C_K',
  C_Q:'C_Q',
  D_7:'D_7',
  D_8:'D_8',
  D_9:'D_9',
  D_10:'D_10',
  D_A:'D_A',
  D_J:'D_J',
  D_K:'D_K',
  D_Q:'D_Q',
  H_7:'H_7',
  H_8:'H_8',
  H_9:'H_9',
  H_10:'H_10',
  H_A:'H_A',
  H_J:'H_J',
  H_K:'H_K',
  H_Q:'H_Q',
  S_7:'S_7',
  S_8:'S_8',
  S_9:'S_9',
  S_10:'S_10',
  S_A:'S_A',
  S_J:'S_J',
  S_K:'S_K',
  S_Q:'S_Q'
}





const userCard1 = {
  id: 'ALIK',
  cards: [{
    type: AllCards.C_K
  }]
}

const userCard2 = {
  id: 'VALERA',
  cards: [{
    type: AllCards.H_K
  }]
}

const userCard3 = {
  id: 'DIMA',
  cards: [{
    type: AllCards.S_K
  }]
}

const Game = {
  cardOnTable: [
    {
      position: ()=>{return users[0]},
      card: {type: AllCards.C_7}
    },
    {
      position: ()=>{return users[0]},
      card: {type: AllCards.C_8}
    },
    {
      position: ()=>{return users[0]},
      card: {type: AllCards.C_9}
    }
  ],
  userCards: [userCard1, userCard2, userCard3]
}


const getGame = ({id}) => {
  return {
    cardOnTable: Game.cardOnTable,
    userCards: Game.userCards.find(item => item.id === id).cards
  }
}

module.exports = {getGame, getAllUsers, getUser, createUser}

