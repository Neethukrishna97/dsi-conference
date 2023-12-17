import React from 'react'
import NavBar from '../../components/nav/NavBar'
import Banner from '../../components/banner/Banner'
import Contact from '../contact/Contact'
import Footer from '../../components/footer/Footer'
import About from '../about/About'
import GoogleMap from '../../components/googleMap/GoogleMap'

const Home = () => {
  return (
  <div className='home'>
    <NavBar background={"rgb(24, 24, 66)"}/>
    <Banner/>
    <About/>
    <Contact/>
    <GoogleMap/>
    <Footer/>
  </div>
  )
}

export default Home