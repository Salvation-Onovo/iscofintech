import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Home = () => {

  return (
    <>
      <div className='w-full h-screen pt-6'>
        <NavBar />
        <Hero />
        <Footer/>
      </div>
    </>
  )
}

export default Home