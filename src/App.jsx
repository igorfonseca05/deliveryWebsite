
import { useEffect, useState } from 'react';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Home from './pages/Home'
import Produtos from './pages/produtos/Produtos'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

// Pages
import NavBar from './components/NavBar/NavBar'
import ModalForm from './components/formContainer/ModalForm';
import Login from './pages/login/Login';
import { MenuContextProvider } from './context/MenuContext';
import { CartProductContextProvider } from './context/CartProductContaiener';
import { UserAuthContextProvider } from './context/userAuthContext';
import { useAuthContext } from './context/userAuthContext';

import { onAuthStateChanged } from 'firebase/auth';
import { useAuth } from './hooks/useAuth';
import Settings from './pages/settings/Settings';
import NewDish from './pages/newDish/NewDish';

function App() {

  const [user, setUser] = useState(undefined)
  const { auth } = useAuth()


  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
      // console.log(user)
    })
  }, [auth])


  if (loadingUser) {
    return <p>Carregando...</p>
  }


  return (
    <>
      <UserAuthContextProvider value={{ user, setUser }}>
        <MenuContextProvider>
          <CartProductContextProvider>
            <ModalForm />
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/produtos' element={<Produtos />}></Route>
                <Route path='/settings' element={<Settings />}></Route>
                <Route path='/newdish' element={<NewDish />}></Route>
                {/* <Route path='/login' element={<Login />}></Route> */}
              </Routes>
            </BrowserRouter>
          </CartProductContextProvider>
        </MenuContextProvider>
      </UserAuthContextProvider>
    </>
  )
}

export default App
