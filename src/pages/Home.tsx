import React from 'react'
import Products from '../components/Products'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Search from './Search'
import Addtocart from './Addtocart'
import Detail from './Detail'

const Home = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Products/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/addtocart' element={<Addtocart/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
    </div>
  )
}

export default Home
