import React from 'react';
import Header from './components/Header/Header';
import {Container}  from '@mui/material';
import UserList from './containers/UserList/UserList'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <Container>
        <Header />
        <UserList />
        <Sidebar />
    </Container>
  );
}

export default App;
