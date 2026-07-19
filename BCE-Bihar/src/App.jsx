import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Community from './Components/pages/Community'
import Contact from './Components/pages/contact'
import Reviews from './Components/pages/Review'



import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Hero />} />
        <Route path='/community' element={<Community />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/reviews' element={<Reviews />} />
       
      </Routes>
      <Footer />
    </>
  )
}

export default App