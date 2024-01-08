import React, { useEffect } from 'react'
import Layout from '../layout/Layout'
import Footer from '../../components/footer/Footer'
import './Speakers.css'
import speakers from '../../contents/speakers'
import students from '../../contents/students'
import guestSpeakers from '../../contents/guestSpeakers'
import icon from '../../assets/Speakers/default.png'


const Speakers = () => {

  useEffect(() => {

    const blurDivs = document.querySelectorAll(".blur-load")

    blurDivs.forEach((div) => {
      const img = div.querySelector("img")

      const loaded = () => {
        div.classList.add("loaded");
      }

      if (img.complete) {
        loaded()
      } else {
        img.addEventListener("load", loaded);
      }

      return () => {
        img.removeEventListener("load", loaded);
      }
    })
  }, [])

  return (
    <>
      <Layout />
      <h2 className="speakers-title">SPEAKERS</h2>
      <div className="speakers">
        <div className='speakers-trackchair'>
          <span>Get to know our</span>
          Track Chairs
        </div>
        <section className='speakers-gallery'>
          {
            speakers.map((item, id) => (
              <div key={id} className='speakers-gallery-card'>
                <div className="blur-load" style={{ backgroundImage: `url(${icon})` }}>
                  <img src={item.image} alt="image" loading='lazy' />
                </div>
                <div className="speakers-overlay"></div>
                <span className='speakers-gallery-role'>{item.role}</span>
                <span className='speakers-gallery-name'>{item.name}</span>
              </div>
            ))
          }
        </section>

        <section>
          <div className=''>
            <div className="guest">
              <span>Get to know our</span>
              Guest Speakers
            </div>
          </div>
          <div className='guest-gallery'>
            {
              guestSpeakers.map((item, id) => (
                <div key={id} className='guest-gallery-card'>
                  <div className="blur-load" style={{ backgroundImage: `url(${icon})` }}>
                    <img src={item.image} alt="image" loading='lazy'/>
                  </div>
                  <div className="guest-overlay"></div>
                  <span className='guest-gallery-role'>{item.role}</span>
                  <span className='guest-gallery-name'>{item.name}</span>
                </div>
              ))
            }
          </div>
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
                  <div className="blur-load" style={{ backgroundImage: `url(${icon})` }}>
                    <img src={item.image} alt="image" loading='lazy'/>
                  </div>
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