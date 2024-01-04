import React from 'react'
import data from '../../contents/data'
import './Contact.css'


const Contact = () => {
  return (
    <>
      <div className='contact'>
        <h4 className="contact-title">{data.contact.title}</h4>
        <h2 className='contact-location'>{data.contact.location}</h2>
        <h4 className='contact-venue'>{data.contact.contactInfo.venue}</h4>

        <div className='contact-dateAndTime'>
          <h4>{data.contact.contactInfo.date}</h4>
          <h4>{data.contact.contactInfo.time}</h4>
          <h4>{data.contact.contactInfo.direction}</h4>
        </div>
      </div>
    </>
  )
}

export default Contact