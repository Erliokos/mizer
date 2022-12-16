const AllCards = {
  D_7:'7_D',
  D_8:'8_D',
  D_9:'9_D',
  D_10:'10_D',
  D_J:'J_D',
  D_Q:'Q_D',
  D_K:'K_D',
  D_A:'A_D',
  H_7:'7_H',
  H_8:'8_H',
  H_9:'9_H',
  H_10:'10_H',
  H_J:'J_H',
  H_Q:'Q_H',
  H_K:'K_H',
  H_A:'A_H',
  S_7:'7_S',
  S_8:'8_S',
  S_9:'9_S',
  S_10:'10_S',
  S_J:'J_S',
  S_Q:'Q_S',
  S_K:'K_S',
  S_A:'A_S',
  C_7:'7_C',
  C_8:'8_C',
  C_9:'9_C',
  C_10:'10_C',
  C_J:'J_C',
  C_Q:'Q_C',
  C_K:'K_C',
  C_A:'A_C',
}

const userCard1 = {
  id: 'alik',
  cards: [{
    type: AllCards.C_K
  }]
}

const userCard2 = {
  id: 'valera',
  cards: [{
    type: AllCards.H_K
  }]
}

const userCard3 = {
  id: 'dima',
  cards: [{
    type: AllCards.S_K
  }]
}

const Game = {
  cardOnTable: [
    {
      position: 'userId1',
      card: {type: AllCards.C_7}
    },
    {
      position: 'userId2',
      card: {type: AllCards.C_8}
    },
    {
      position: 'userId3',
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

module.exports = {getGame}

