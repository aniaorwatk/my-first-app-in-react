import react, {FC} from 'react';
import './UserList.css';
import Card from './Card';
import List from '@mui/material/List';
import {Box} from '@mui/material';

const UserList = () => {
  return (
    <Box className="userList--box">
      <List  sx={{ width: '100%', maxWidth: 360 }}>
        <Card />
      </List>
    </Box>   
  )
}

export default UserList;