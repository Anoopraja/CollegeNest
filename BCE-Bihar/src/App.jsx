import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Community from './Components/pages/Community'
import Contact from './Components/pages/Contact'

import Colleges from './Components/pages/College'
import Profile from './Components/pages/User/userProfile'
import AdminProfile from './Components/pages/User/userAdminProfile'

import { Route, Routes } from 'react-router-dom'
import Login from './Components/pages/login'
import AdminLogin from './Components/pages/AdminLogin'
import Signup from './Components/pages/signup'
import CollegeInfo from './Components/pages/Collegeinfo'
import Counselling from './Components/pages/Councling'
import ChatLive from './Components/pages/ChatLive'
import Roadmap from './Components/pages/Roadmap'
import Syllabus from './Components/pages/Syllabus'
import Skills from './Components/pages/Skills'


// import VerifyEmail from './Components/pages/userVerification/userVerification'

import ScrollToTop from './scrollTop'
import WhereToStudy from './Components/pages/WhereToStudy'


function App() {
  return (
    <>
    <ScrollToTop />
     <Navbar />
      <Routes>
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/register' element={<Signup />} />
        <Route path='/admin/login' element={<AdminLogin/>} />
        <Route index element={<Hero />} />
        <Route path='/college' element={<Colleges />} />
        <Route path="/college/:id" element={<CollegeInfo />} />
        <Route path='/community' element={<Community />} />
        <Route path="/community/:id" element={<ChatLive />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/counselling' element={<Counselling />} />
        <Route path='/roadmap' element={<Roadmap />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/syllabus' element={<Syllabus />} />
        <Route path='/chat' element={<ChatLive />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/admin' element={<AdminProfile />} />
        <Route path='/admin/profile/:id' element={<AdminProfile />} />
        <Route path='/wheretostudy' element={<WhereToStudy />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App