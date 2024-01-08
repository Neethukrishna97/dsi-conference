import React, { useEffect } from "react";
import "./About.css";
import data from "../../contents/data";
import content1 from "../../assets/content1.jpg";
import content2 from "../../assets/content2.jpg";
import content3 from "../../assets/content3.jpg";
import content4 from "../../assets/content4.jpg";
import content5 from "../../assets/content5.jpg";
import content6 from "../../assets/content6.jpg";
import CoverPoster from "../../components/coverPoster/CoverPoster";
import blur from '../../assets/blur.jpg'


const About = () => {
  const imageContent = [
    {
      title: "Get New Insights",
      image: content3,
      description: `${data.about.aboutContentDescription.GetNewInsights}`,
    },
    {
      title: "Networking",
      image: content5,
      description: `${data.about.aboutContentDescription.Networking}`,
    },
    {
      title: "Goal",
      image: content1,
      description: `${data.about.aboutContentDescription.goal}`,
    },
    {
      title: "Learn",
      image: content2,
      description: `${data.about.aboutContentDescription.learn}`,
    },

    {
      title: "Great Speakers",
      image: content4,
      description: `${data.about.aboutContentDescription.speakers}`,
    },

    {
      title: "Discover",
      image: content6,
      description: `${data.about.aboutContentDescription.discover}`,
    },
  ];


  useEffect(() => {
    const blurDivs = document.querySelectorAll(".blur-load");

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
    <>
      <div className="about">
        <span>JOIN US</span>
        <h1 className="about-title">{data.about.aboutTitle}</h1>
        <h4 className="about-content-sub">{data.about.aboutContent}</h4>
        <div className="about-contents">
          {imageContent.map((content, index) => (
            <div key={index} className="about-content">
              <div className="blur-load" style={{ backgroundImage: `url('${blur}')` }}>
                <img src={content.image} alt="img" loading="lazy" />
              </div>
              <span className="about-description">
                <h2>{content.title}</h2>
                <h4>{content.description}</h4>
              </span>
              <div className="about-image-overlay"></div>
            </div>
          ))}
        </div>
        <CoverPoster />
      </div>
    </>
  );
};

export default About;
