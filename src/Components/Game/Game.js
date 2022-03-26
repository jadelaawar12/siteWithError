import React from 'react'
import Sidebar from '../Sidebar';
import { Heading } from '@chakra-ui/react'
import "./game.css";

function Game() {
  return (
    <div className='game'>
      <Sidebar />
      <div className='title'>
        <Heading>
          Coming Soon!
        </Heading>
      </div>
    </div>
  )
}

export default Game