import React from 'react';
import Header from './components/Header/Header';
import {Container}  from '@mui/material';
import UserList from './containers/UserList/UserList';

function App() {
  return (
    <Container>
        <Header />
        <UserList />
    </Container>
  )
}

export default App;
