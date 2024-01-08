import React from 'react';
import schedule from '../../assets/schedule.png'
import './MyDocument.css'
const MyDocument = () => {


  return (
    <div className='mydocument'>
      <div className="document">
        <img src={schedule} alt="schedule" />
      </div>
    </div>
  );
};

export default MyDocument;
