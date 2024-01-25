import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Contact from './components/Contact';
import ShowItem from './components/ShowItem';
import BuyNow from './components/BuyNow'
import {useSelector} from 'react-redux'
import About from './components/About';
import Navbar from './components/Navbar';
import SetLoginRegSection from './components/AuthSection/SetLoginRegSection';

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<SetLoginRegSection />}></Route>
        <Route path='/' element={<ProtectedRoutes Component={Home} />}></Route>
        <Route path='/cart' element={<ProtectedRoutes Component={Cart} />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/buyNow' element={<ProtectedRoutes Component={BuyNow} />}></Route>
        <Route path='/product-details/:productDetail' element={<ProtectedRoutes Component={ShowItem} />}></Route>
        <Route path='*' element={<FourZeroFour />}></Route>
      </Routes>

    </>
  );
}


function ProtectedRoutes(props) {
  const { isAuth} = useSelector(state => state.auth)
  const { Component } = props
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [navigate, isAuth])

  return (
    <>
      <Component />
    </>
  )
}

function FourZeroFour() {
  return (
    <>
      <Navbar/>
      <h2>This is a forbiden page... </h2>
    </>
  )
}


export default App;
