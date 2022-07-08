import {Container}  from '@mui/material';
import Header from './components/Header/Header';
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
