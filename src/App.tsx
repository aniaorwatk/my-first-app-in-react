import { Container } from '@mui/material';
import Header from './components/Header/Header';
import UserList from './containers/UserList/UserList';
import { Route, Routes } from 'react-router-dom';
import SinglePage from './containers/SinglePage/SinglePage';


function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/:id" element={<SinglePage />} />
      </ Routes>
    </Container>
  )
}

export default App;
