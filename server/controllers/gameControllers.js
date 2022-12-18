const users = []

const Game = {
  cardOnTable: [],
  userCards: [],
  prikup: [],
  initPrikup: false,
  order: 0,
  mizer: false,
  message: '',
  start: false,
  prikupSave: false,
  playedCards: []
}

const clearMessage = () => {
  const timer = setTimeout(() => {
    Game.message = ''
    clearTimeout(timer)
  }, 3000)
}

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

const getOrder = () => {
  return Game.order
}

const getMessage = () => {
  if(Game.message != '') return Game.message
  if(users.length === 1) return 'ЖДЕМ ДВУХ ИГРОКОВ'
  if(users.length === 2) return 'ЖДЕМ ОДНОГО ИГРОКА'
  if(users.length === 3 && Game.initPrikup) return `КАРТЫ РОЗДАНЫ ИГРОК ИГРОК ${users[getOrder()].id} НАЧИНАЕТ ГОЛОСОВАТЬ ЗА ПРИКУП`
  if(Game.cardOnTable.length === 0 && Game.start) return `ХОДИТ ИГРОК ${users[getOrder()].id}`
  return
}

const getGame = ({id}) => {
  return {
    cardOnTable: Game.cardOnTable,
    userCards: Game.userCards.length ? Game.userCards.find(item => item.position.id === id).cards : [],
    userMove: () => users[getOrder()],
    initPrikup: Game.initPrikup,
    message: getMessage(),
    prikupSave: Game.prikupSave,
    playedCards: Game.playedCards
  }
}

const getRandomCard = () => {
  const cards = Object.values(AllCards)
  const shuffleCards = cards.sort(() => Math.random() - 0.5);
  const prikup = shuffleCards.splice(0,2)
  const userCard = shuffleCards.splice(0,10)
  const userCard1 = shuffleCards.splice(0,10)
  const userCard2 = shuffleCards.splice(0,10)
  return [prikup, userCard, userCard1, userCard2]
}

const initGame = () => {
  const  [prikup, userCard, userCard1, userCard2] = getRandomCard()
  
  Game.userCards = [
    {position: users[0], cards: userCard.map(item =>({type: item})), bank: []},
    {position: users[1], cards: userCard1.map(item =>({type: item})), bank: []},
    {position: users[2], cards: userCard2.map(item =>({type: item})), bank: []},
  ]
  Game.prikup = prikup.map(item => ({type: item}))
  Game.initPrikup = true
}

const createUser = ({input}) => {
  const oldUser = users.find(item => item.id === input.username.toUpperCase())
  if(oldUser) return oldUser
  if(users.length > 2) throw new Error('ВСЕ МЕСТА ЗАНЯТЫ')
  const user = getId(input);
  users.push(user)
  if(users.length === 3) initGame()
  return user
}

const nextOrder = () => {
  if(Game.order === 0) return 1
  if(Game.order === 1) return 2
  if(Game.order === 2) return 0
}

const getCurentUserCards = () => {
  return Game.userCards.find(user => user.position.id === users[getOrder()].id)
}

const putPrikupOnUserCard = () => {
  const curentUserCard = getCurentUserCards()
  curentUserCard.cards = [...curentUserCard.cards, ...Game.prikup]
}

const getPrikup = () => {
  putPrikupOnUserCard()
  startGame()
  return Game.prikup
}
const startGame = () => {
  Game.start = true
  Game.prikupSave = true
  Game.initPrikup = false
  Game.message = `ПРИКУП ВЗЯЛ ${users[getOrder()].id}`
  clearMessage()
}

const startMizerGame = () => {
  Game.start = true
  Game.initPrikup = false
  Game.mizer = true
  Game.message = 'НИ КТО НЕ ВЗЯЛ ПРИКУП, ИГРАЕМ НА МИЗЕР'
  clearMessage()
}

let countVotes = 0

const passPrikup = () => {
  if(countVotes > 2) return null
  Game.order = nextOrder()
  countVotes++;
  if(countVotes === 3) startMizerGame()
  return users[Game.order]
}

const putPrikup = ({input: {prikup}}) => {
    const curentUserCard = getCurentUserCards()
    curentUserCard.cards = curentUserCard.cards.filter(item => !prikup.includes(item.type))
    curentUserCard.bank = [...curentUserCard.bank, ...prikup]
    Game.prikupSave = false;
    return users[getOrder()]
}

const computeStep = (list) => {
  if(Game.userCards[0].cards.length === 0) Game.message = 'КОНЕЦ ИГРЫ'
  Game.cardOnTable = []
}

const putCard = ({input: {type}}) => {
  Game.cardOnTable = [...Game.cardOnTable, {position: users[getOrder()], card:{type}}]
  const curentUserCard = getCurentUserCards()
  curentUserCard.cards = curentUserCard.cards.filter(item => item.type !== type)
  if(Game.cardOnTable.length === 3) {
    Game.playedCards = [...Game.playedCards, {pcards: Game.cardOnTable.map(item => item.card)}]
    computeStep(Game.cardOnTable)
    return []
  }
  Game.order = nextOrder()
  return []
}

module.exports = {getGame, getAllUsers, getUser, createUser, passPrikup, getPrikup, putPrikup, putCard}

