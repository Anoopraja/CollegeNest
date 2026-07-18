import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Colleges from './Components/pages/Colleges'
import CollegeInfo from './Components/pages/CollegeInfo'
import Reviews from './Components/pages/Reviews'
import Community from './Components/pages/Community'

import { Route, Router, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/community" element={<Community />} />
        <Route path="/college/:id" element={<CollegeInfo />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App