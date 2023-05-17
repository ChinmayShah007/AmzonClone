import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import {Routes, Route} from 'react-router-dom';
import Products from './components/products';
import Product from './components/product';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/products" Component={Products}/>
        <Route exact path="/products/:id" Component={Product}/>
      </Routes>
    </>
  );
}

export default App;
