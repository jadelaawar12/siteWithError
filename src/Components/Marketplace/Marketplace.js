import React from 'react'
import Sidebar from '../Sidebar';
import { Heading } from '@chakra-ui/react'
import "./marketplace.css";

function Marketplace() {
  return (
    <div className='marketplace'>
      <Sidebar />
      <div className='titlemarket'>
        <Heading>
          Coming Soon!
        </Heading>
      </div>   
    </div>
  )
}

export default Marketplace