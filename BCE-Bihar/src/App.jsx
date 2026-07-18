import { useState } from 'react'

import './App.css'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Colleges from './Components/pages/Colleges'
import CollegeInfo from './Components/pages/CollegeInfo'

import {Route , Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/college' element={<Colleges />} />
        <Route path='/College/:id' element={<CollegeInfo />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
