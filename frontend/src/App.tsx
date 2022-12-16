import React, { useState } from 'react'
import {Authorization} from './Components/Authorization/Authorization'
import { Game } from './Components/Game/Game'
import { Navbar } from './Components/Navbar/Navbar'
import { User } from './generated/operations'



function App() {

  const [user, setUser] = useState<User>()

  return (
    <>
      {user == null && <Authorization setUser={setUser}/>}
      <Navbar />
      {user != null && <Game user={user} />}
    </>
  )
}

export default App
