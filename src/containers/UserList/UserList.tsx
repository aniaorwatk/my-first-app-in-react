import react, { FC } from 'react';
import './UserList.css';
import CardPerson from './CardPerson';
import { Box } from '@mui/material';

const UserList = () => {
  return (
    <Box className="userList--box">
      <CardPerson />
    </Box>
  )
}

export default UserList;
