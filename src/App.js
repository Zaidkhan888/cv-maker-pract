import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from './component/LandingPage/Landingpage';
import Login from './component/LoginPage/Login';
import Register from './component/Register/Register';
import Maindashboard from "./component/Maindashboard/Maindashboard"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          
          <Route path='/' element={<Landingpage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/dashboard' element={<Maindashboard/>} />
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App