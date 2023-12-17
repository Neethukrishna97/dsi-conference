import React from "react";
import './GoogleMap.css'

const GoogleMap = () => {
  return (
    <div className="goole-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17540.45535272232!2d12.878!3d56.664674000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4651a31d2a10a16f%3A0x6c6ace33bc5d7a1f!2sH%C3%B6gskolan%20i%20Halmstad!5e0!3m2!1sen!2sus!4v1702873380806!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{border:"0"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
