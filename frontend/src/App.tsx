import React, { useState } from 'react'
import {Authorization} from './Components/Authorization/Authorization'
import { Game } from './Components/Game/Game'
import { Navbar } from './Components/Navbar/Navbar'



function App() {

  const [userId, setUserId] = useState<string>()

  return (
    <>
      {userId == null && <Authorization setUserId={setUserId}/>}
      <Navbar />
      <Game />
    </>
  )
}

export default App
