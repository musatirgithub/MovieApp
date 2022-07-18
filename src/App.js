import Navbar from './components/Navbar'
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import {useState} from 'react';
import {UserContext} from './context/UserContext';
import { Router } from 'react-router';
import AppRouter from './router/AppRouter';

function App() {
  const [loggedUser, setLoggedUser] = useState(null);

  return (
    <>
      <UserContext.Provider value={{loggedUser, setLoggedUser}}>
        <AppRouter />
      </UserContext.Provider>
    </>
    
  );
}

export default App;
