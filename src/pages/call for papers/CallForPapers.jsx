import React from "react";
import Layout from "../layout/Layout";
import Footer from "../../components/footer/Footer";
import "./CallForPapers.css";
import { Link } from "react-router-dom";
import { loginUrl } from "../../contents/constants";
import data from "../../contents/data";

const CallForPapers = () => {
  return (
    <>
      <Layout />
      <h2 className="paper-title">CALL FOR PAPERS</h2>
      <div className="paper">
        <div className="paper-details">
          <h2 className="paper-heading">{data.callForPaper.paperHeading}</h2>
          <p className="paper-represent">{data.callForPaper.represent}</p>
          <p className="paper-content">{data.callForPaper.paperDescription}<Link to={loginUrl}>here</Link></p>
          <Link to={loginUrl}>
            <button className="paper-submit"> Submit Your Paper</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CallForPapers;
