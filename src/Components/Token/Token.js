import React from 'react'
import { useState } from 'react';
import Sidebar from '../Sidebar';
import { Heading } from '@chakra-ui/react'
import './token.css';
import Ramper from '../Ramper/Ramper';
import { Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

function Token() {
  let initialTxt = 'Stake Your Assets';
  const [text, setText] = useState(initialTxt);

  let initialText = 'Unstake Your Assets';
  const [text1, setText1] = useState(initialText);

  return (
    <div className='wholescreen'>
    <Sidebar />
    <div className='ramper'>
    </div>
    <div className='staking'>
      <div className='holds-box'>
          <Heading className='stake-title'>
            STAKE MILLTICKET
          </Heading>
          <div className='holds-staking'>
            <div className='info'>
              <div className='apy-extra'>
                  <div className='token-price'>
                     <p className='text'>Millticket Price</p>
                     <Heading className='heading'>100</Heading>
                  </div>
                  <div className='apy'>
                      <p className='text'>APY</p>
                      <Heading className='text'>14%</Heading>
                  </div>
                  <div className='supply'>
                    <p className='text'>Total Millticket Supply</p>
                    <Heading className='heading'>10mil</Heading>
                  </div>
              </div>
              <div className='stake-top-layer'>
                <div className='stake-topleft'>
                  <Heading className='amount-title'>Stake Amount</Heading>
                  <Input className='amount-input' variant='filled' width='90%' placeholder='Amount' size='md' />
                </div>
                <div className='stake-topright'>
                  <Heading className='amount-title'>APY</Heading>
                  <Input className='amount-input' variant='filled' isReadOnly width='90%' placeholder='14%' size='md' />
                </div>
              </div>
              <div className='stake-bottom-layer'>
                <div className='stake-bottomleft'>
                  <Heading className='amount-title'>Current Price</Heading>
                  <Input className='amount-input' variant='filled' isReadOnly width='90%' placeholder='100' size='md' />
                </div>
                <div className='stake-bottomright'>
                  <Heading className='amount-title'>Potenital Earnings</Heading>
                  <Input className='amount-input' variant='filled' isReadOnly width='90%' placeholder='10x' size='md' />
                </div>
              </div>
            </div>
            <div className='stake-button'>
                <Button 
                onMouseOver={() => setText('Coming Soon')}
                onMouseLeave={() => setText(initialTxt)} 
                className='stake-now' 
                colorScheme='purple' 
                size='lg' 
                variant='outline'>
                   {text}
                </Button> 
            </div>
            <div className='stake-button'>
                <Button 
                onMouseOver={() => setText1('Coming Soon')}
                onMouseLeave={() => setText1(initialText)}
                className='stake-now' 
                colorScheme='purple' 
                size='lg' 
                variant='outline'>
                   {text1}
                </Button> 
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Token