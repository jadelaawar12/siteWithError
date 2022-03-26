import React from 'react';
import { useState } from 'react';
import "./account.css";
import Sidebar from '../Sidebar';
import Wallet from '../Wallet/Wallet'
import { Button } from '@chakra-ui/react';
import gif from './images/example.gif';
import image1 from '../../images/2F4336EB-7725-4849-93B8-8C2139F17DF2.jpeg'
import image2 from '../../images/07A5B4CD-96B5-4AC4-AEAB-1B2F17051108.jpeg'
import image3 from '../../images/27A15CA6-9A11-4E67-A9D9-498BC4E682D4.jpeg'
import image4 from '../../images/6464083B-6DA1-4077-BF96-253BABC30269.jpeg'
import image5 from '../../images/BCC190CD-9FC9-4BFF-9038-CC77A914925F.jpeg'
import image6 from '../../images/DF7483E4-117B-4C7F-8247-283C25774DE8.jpeg'


function Account() {
  let initialTxt = 'Mint';
  const [text, setText] = useState(initialTxt);

  return (
    <div className='account'>
      <Sidebar />
      <div className='section-right'>
        <div className='center'>
          <div className='tokens'>
            <div className='bubble-left'>
                <div className='top-layer'>
                    <div className='circle-top'>
                    <img className='image' src={image1} alt="" />
                    </div>
                </div>
                <div className='middle-layer'>
                    <div className='circle-left'>
                    <img className='image' src={image2} alt="" />
                    </div>
                </div>
                <div className='bottom-layer'>
                  <div className='circle-top'>
                  <img className='image' src={image5} alt="" />
                  </div>
                </div>
            </div>
            <div className='mint-button'>
              <Button 
              onMouseOver={() => setText('Coming Soon')}
              onMouseLeave={() => setText(initialTxt)}
              size='lg' 
              colorScheme='purple' 
              variant='outline' 
              className='mint'>
                {text}
              </Button>
            </div>
            <div className='bubble-right'>
              <div className='top-layer'>
                  <div className='circle'>
                    <img className='image' src={image4} alt="" />
                  </div>
              </div>
              <div className='middle-layer'>
                 <div className='circle-middle'>
                 <img className='image' src={image3} alt="" />
                 </div>
              </div>
              <div className='bottom-layer'>
                <div className='circle'>
                <img className='image' src={image6} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account