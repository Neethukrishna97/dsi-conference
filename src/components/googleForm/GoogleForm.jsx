import React from 'react'
import './GoogleForm.css'

const GoogleForm = () => {
  return (
    <div className='google-form'>
       {/* <iframe className='google-form-scroll' src="https://docs.google.com/forms/d/e/1FAIpQLSf_VqPGbxd-xALdkbtGZFdMKAmGwclUJBkBsYPrVKELjRL_0Q/viewform?embedded=true" width="640" height="2000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
       <iframe className='google-form-scroll' src="https://docs.google.com/forms/d/e/1FAIpQLSeKTFwl4cEK9Ywe140i3VT6NCKh4RvEzGCY1UkDDZJD8SheuA/viewform?embedded=true" width="640" height="2000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  )
}

export default GoogleForm