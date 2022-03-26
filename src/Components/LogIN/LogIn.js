import React from 'react';
import { useMoralis } from "react-moralis";
import { Button } from '@chakra-ui/react'
import { Container, Header } from '@chakra-ui/layout'
import '../LogIN/login.css';
import TokenPrice from '../TokenPrice';

function LogIn() {
    const {authenticate, isAuthenticated, isUnauthenticated, logout, isAuthenticating, authError} = useMoralis();

    if(isAuthenticated){
        return (
            <div className='btn'>
            <Container className='button' style={{display: 'flex', flexDirection: "row", justifyContent: 'right'}}>
                <Button onClick={() => logout()}>Logout</Button>
            </Container>
            </div>
        );
    }
    if(isUnauthenticated){
        return (
            <div className='btn'>
            <Container className='button' style={{display: 'flex', flexDirection: "row", justifyContent: 'right'}}>
                <Button onClick={() => authenticate()}>authenticate</Button>
            </Container>
            </div>
        );
    }
    if(isAuthenticating){
        return (
            <div className='btn'>
            <Container className='button' style={{display: 'flex', flexDirection: "row", justifyContent: 'right'}}>
                <Button>Loading...</Button>
            </Container>
            </div>
        );
    }
    if(authError){
        return (
            <div className='btn'>
            <Container className='button' style={{display: 'flex', flexDirection: "row", justifyContent: 'right'}}>
                <Button onClick={() => logout()}>authenticate</Button>
            </Container>
            </div>
        );
    }
  return <div></div>;
}

export default LogIn;
