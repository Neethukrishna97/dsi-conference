import React from 'react'
import Layout from '../layout/Layout'
import Footer from '../../components/footer/Footer'
import './Evalution.css'
import GoogleForm from '../../components/googleForm/GoogleForm'

const Evalution = () => {
  return (
    <>
      <Layout />
      <h2 className="evalution-title">EVALUTION</h2>
      <div className="evalution">
        <GoogleForm />
      </div>
      <Footer />
    </>
  )
}

export default Evalution