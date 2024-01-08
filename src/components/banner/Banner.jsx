import React, { useEffect } from "react";
import "./Banner.css";
import poster from "../../assets/banner.jpg"
import data from "../../contents/data";
import { Link } from "react-router-dom";
import blurBanner from '../../assets/banner-blur.jpg'

const Banner = () => {
  useEffect(() => {
    const blurDivs = document.querySelectorAll(".blur-load-banner");

    blurDivs.forEach((div) => {
      const img = div.querySelector("img");

      const loaded = () => {
        div.classList.add("loaded");
      };

      if (img.complete) {
        loaded()
      } else {
        img.addEventListener("load", loaded);
      }

      return () => {
        img.removeEventListener("load", loaded);
      };
    });
  }, []);

  
  return (
    <div className="banner">
      <div className="blur-load-banner" style={{ backgroundImage: `url('${blurBanner}')` }}>
        <img style={{ backgroundImage: `url(${poster})` }} className="banner-image" loading="lazy"/>
      </div>
      <div className="banner-overlay"></div>
      <div className="banner-contents">
        <span className="banner-date">{data.banner.bannerDate}</span>
        <h2>6<sup>th</sup>{data.banner.bannerTitle}</h2>
        <Link to='/call-for-papers'> <button className="banner-button">{data.banner.bannerSubmit}</button></Link>
      </div>
    </div>
  );
};

export default Banner;
