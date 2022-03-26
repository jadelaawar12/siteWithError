import { display, padding } from '@mui/system';
import React from 'react';
import { Heading } from '@chakra-ui/react'
import "./home.css";
import Sidebar from '../Sidebar';


function home() {

  return (
    <div className='up'>
    <Sidebar />
      <div className='carries'>
      <div className='upper'>
        <div className='holder'>
          <p>Token Contract</p>
          <Heading className='contract-address'>0xB8c77482e45F1F44dE1745F52C74426C631bDD52</Heading>
        </div>
      </div>
      <div className='down'>
        <div className='left'><p>Price In USD</p><Heading className='price'>--</Heading></div>
        <div className='right'><p>Total Users</p><Heading className='price'>--</Heading></div>
      </div>
      <div className='down-2'>
        <div className='bottom-left'><p>Price in BNB:</p><Heading className='price'>-- </Heading></div>
        <div className='bottom-right'><p>Market Cap</p><Heading className='price'>--</Heading></div>
      </div>
      </div>
    </div>
  )
}

export default home