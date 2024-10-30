
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import Home from './pages/Home'
import Produtos from './pages/produtos/Produtos'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

// Pages
import NavBar from './components/NavBar/NavBar'


function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/produtos' element={<Produtos />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
