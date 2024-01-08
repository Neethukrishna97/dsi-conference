import React from 'react'
import Footer from '../../components/footer/Footer'
import Layout from '../layout/Layout'
import './Shedule.css'
import MyDocument from '../../components/pdfViewer/MyDocument';

const Shedule = () => {
  return (
    <>
    <Layout/>
    <h2 className="shedule-title">SCHEDULE</h2>
    <div className="shedule">
     <MyDocument/>
    </div>
    <Footer/>
    </>
  )
}

export default Shedule