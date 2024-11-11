
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


function App() {


  return (
    <>
      <UserAuthContextProvider>
        <MenuContextProvider>
          <CartProductContextProvider>
            <ModalForm />
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/produtos' element={<Produtos />}></Route>
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
