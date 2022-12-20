import React, { useState } from 'react'
import {Authorization} from './BaseComponent/Authorization/Authorization'
import { Game } from './BaseComponent/Game/Game'
import { Navbar } from './BaseComponent/Navbar/Navbar'
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
