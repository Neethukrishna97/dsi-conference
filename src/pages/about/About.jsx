import React from "react";
import "./About.css";
import data from "../../contents/data";
import content1 from "../../assets/content1.jpg";
import content2 from "../../assets/content2.jpg";
import content3 from "../../assets/content3.jpg";
import content4 from "../../assets/content4.jpg";
import content5 from "../../assets/content5.jpg";
import content6 from "../../assets/content6.jpg";
import CoverPoster from "../../components/coverPoster/CoverPoster";


const About = () => {
  const imageContent = [
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
      title: "Discover",
      image: content3,
      description: `${data.about.aboutContentDescription.discover}`,
    },
    {
      title: "Speakers",
      image: content4,
      description: `${data.about.aboutContentDescription.speakers}`,
    },
    {
      title: "Plan",
      image: content5,
      description: `${data.about.aboutContentDescription.plan}`,
    },
    {
      title: "Focus",
      image: content6,
      description: `${data.about.aboutContentDescription.focus}`,
    },
  ];
  return (
    <>
      <div className="about">
        <span>JOIN US</span>
        <h1 className="about-title">{data.about.aboutTitle}</h1>
        <div className="about-contents">
          {imageContent.map((content, index) => (
            <div className="about-content">
              <img src={content.image} alt="img" />
              <span className="about-description">
                <h2>{content.title}</h2>
                <h4>{content.description}</h4>
              </span>
              <div className="about-image-overlay"></div>
            </div>
          ))}
        </div>
        <CoverPoster/>
      </div>
    </>
  );
};

export default About;
