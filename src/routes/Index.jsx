import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Project from '../pages/Project'
import Contact from '../pages/Contact'
import AdminDashboard from '../../admin/AdminDashboard'
import AllMails from '../../admin/components/AllMails'
import MailDetail from '../../admin/components/MailDetail'

const Index = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Dashboard' element={<AdminDashboard />} />
        <Route path='/AllMails' element={<AllMails/>} />
        <Route path='/MailDetail' element={<MailDetail/>} />
      </Routes>
    </Router>
  )
}

export default Index