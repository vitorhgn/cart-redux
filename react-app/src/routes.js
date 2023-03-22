import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'


// import { Container } from './styles';

function Rotas() {
  return (
    <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/cart" Component={Cart}/>
    </Routes>
  )
}

export default Rotas;