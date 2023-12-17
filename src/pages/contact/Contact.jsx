import React from 'react'
import Footer from '../../components/footer/Footer'
import data from '../../contents/data'
import './Contact.css'


const Contact = () => {
  return (
    <>
      <div className='contact'>
        <h4 className="contact-title">{data.contact.title}</h4>
        <h2 className='contact-location'>{data.contact.location}</h2>
        <div className='contact-venue'>
          <h4>{data.contact.contactInfo.date}</h4>
          <h4>{data.contact.contactInfo.time}</h4>
        </div>
      </div>
    </>
  )
}

export default Contact