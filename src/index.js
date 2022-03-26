import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { MoralisProvider } from "react-moralis";
import { HashRouter } from 'react-router-dom';

const theme = extendTheme({
   config: {
     initialColorMode: 'dark',
   } 
  })

const appId='Jz67zCskHzPhaSAZxU2kpQpGY8d8vTGQGXHBWTYk';
const serverUrl='https://0v08xbp5peej.usemoralis.com:2053/server';



ReactDOM.render(
    <React.StrictMode>
        <MoralisProvider appId={appId} serverUrl={serverUrl}>
            <ChakraProvider theme={theme}>
                <App />
              </ChakraProvider>
          </MoralisProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
