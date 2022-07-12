import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import UserList from './containers/UserList/UserList';
import SinglePage from './containers/SinglePage/SinglePage';
import Sidebar from './components/Sidebar2/Sidebar2';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/:id" element={<SinglePage />} />
      </ Routes>
      <Sidebar />
    </Container>
    
  )
}

export default App;
