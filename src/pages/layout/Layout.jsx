import React from 'react'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/nav/NavBar'
import banner from '../../assets/poster2.jpg'
import './Layout.css'

function Layout() {
  return (
    <>
    <NavBar background={"transparent"}/>
    <div style={{backgroundImage:`url(${banner})`}} className='layout-banner'></div>
    </>
  )
}

export default Layout