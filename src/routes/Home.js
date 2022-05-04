import React from 'react'
import Hero from '../component/Hero';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'

const home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default home;