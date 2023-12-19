import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icons">
                <a href="https://www.facebook.com/HalmstadUniversity">
                    <FontAwesomeIcon className='footer-icon' icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/hogskolanihalmstad/">
                    <FontAwesomeIcon className='footer-icon' icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/school/h%C3%B6gskolan-i-halmstad/">
                    <FontAwesomeIcon className='footer-icon' icon={faLinkedin} />
                </a>
            </div>
            <div className="footer-copyrights"><span>&copy;&nbsp;</span> 2024 DSI Conference.All rights reserved</div>
        </div>
    )
}

export default Footer