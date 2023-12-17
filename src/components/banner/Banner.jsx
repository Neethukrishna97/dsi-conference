import React from "react";
import "./Banner.css";
import poster from "../../assets/banner.jpg"
import data from "../../contents/data";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div style={{backgroundImage:`url(${poster})`}} className="banner-image" />
      <div className="banner-overlay"></div>
      <div className="banner-contents">
        <span className="banner-date">{data.banner.bannerDate}</span>
        <h2>{data.banner.bannerTitle}</h2>
       <Link to='/call-for-papers'> <button className="banner-button">{data.banner.bannerSubmit}</button></Link>
      </div>
    </div>
  );
};

export default Banner;
