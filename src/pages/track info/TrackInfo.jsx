import React from 'react'
import Layout from '../layout/Layout'
import Footer from '../../components/footer/Footer'
import './TrackInfo.css'
import data from '../../contents/data'

const TrackInfo = () => {
  return (
    <>
      <Layout />
      <h2 className="trackinfo-title">TRACK INFO</h2>
      <div className="trackinfo">
        {
          data.trackInfo.map((trackInfo, id) => (
            <div key={id} className='track'>
              <h2 className="trackinfo-heading">{trackInfo.track}</h2>
              <h3 className="trackinfo-chair">{trackInfo.trackchair}</h3>
              <p className='trackinfo-content'>{trackInfo.trackDescription}</p>
              <p className='trackinfo-content'>{trackInfo.trackQuestions}</p>
              <p className='trackinfo-content'>{trackInfo.trackMore}</p>
            </div>
          ))
        }
      </div>
      <Footer />
    </>
  )
}

export default TrackInfo