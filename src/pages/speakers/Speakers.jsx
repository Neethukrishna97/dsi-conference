import React from 'react'
import Layout from '../layout/Layout'
import Footer from '../../components/footer/Footer'
import './Speakers.css'
import speakers from '../../contents/speakers'
import students from '../../contents/students'


const Speakers = () => {
  return (
    <>
      <Layout />
      <h2 className="speakers-title">SPEAKERS</h2>
      <div className="speakers">
        <div className="speakers-row">
          <div className='speakers-trackchair'>
            <span>Get to know our</span>
            Track Chairs
          </div>
          <div className='speakers-guest'>
            <span>Get to know our</span>
            Guest Speaker
          </div>
        </div>
        <section className='speakers-gallery'>
          {
            speakers.map((item, id) => (
              <div key={id} className='speakers-gallery-card'>
                <img src={item.image} alt="image" />
                <div className="speakers-overlay"></div>
                <span className='speakers-gallery-role'>{item.role}</span>
                <span className='speakers-gallery-name'>{item.name}</span>
              </div>
            ))
          }
        </section>

        <section>
          <div className='students'>
            <span>Get to know our</span>
             <h2> Student Authors</h2>
          </div>
          <div className='students-gallery'>
            {
              students.map((item, id) => (
                <div key={id} className='students-gallery-card'>
                  <img src={item.image} alt="image" />
                  <div className="students-overlay"></div>
                  <span className='students-gallery-role'>{item.role}</span>
                  <span className='students-gallery-name'>{item.name}</span>
                </div>
              ))
            }
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Speakers