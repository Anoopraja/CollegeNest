import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Community from './Components/pages/Community'
import Contact from './Components/pages/contact'
import Reviews from './Components/pages/Review'
import Colleges from './Components/pages/College'

import { Route, Routes } from 'react-router-dom'
import Login from './Components/pages/login'


function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route index element={<Hero />} />
        <Route path='/college' element={<Colleges />} />
        <Route path='/community' element={<Community />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/reviews' element={<Reviews />} />
       
      </Routes>
      <Footer />
    </>
  )
}

export default App