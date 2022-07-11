import { Box } from '@mui/material';
import CardPerson from './CardPerson';
import './UserList.css';


const UserList = () => {
  return (
    <Box className="userList--box">
      <CardPerson />
    </Box>
  )
}

export default UserList;
