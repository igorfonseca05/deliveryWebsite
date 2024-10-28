
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import Home from './pages/Home'
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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
