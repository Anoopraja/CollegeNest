import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Community from './Components/pages/Community'
import Contact from './Components/pages/Contact'
import Reviews from './Components/pages/Review'
import Colleges from './Components/pages/College'
import Profile from './Components/pages/User/userProfile'

import { Route, Routes } from 'react-router-dom'
import Login from './Components/pages/login'
import Signup from './Components/pages/signup'
import CollegeInfo from './Components/pages/Collegeinfo'
import Counselling from './Components/pages/Councling'
import ChatLive from './Components/pages/ChatLive'


function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route index element={<Hero />} />
        <Route path='/college' element={<Colleges />} />
        <Route path="/college/:id" element={<CollegeInfo />} />
        <Route path='/community' element={<Community />} />
        {/* <Route path="/community/:id" element={<ChatLive />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/counselling' element={<Counselling />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App