import react, {FC} from 'react';
import './UserList.css';
import Card from './Card';
import List from '@mui/material/List';
import {Box} from '@mui/material';

export default function AlignItemsList() {
  return (
    <Box className="UserList--box">
      <List  sx={{ width: '100%', maxWidth: 360 }}>
        <Card />
      </List>
    </Box>   
  )
}
