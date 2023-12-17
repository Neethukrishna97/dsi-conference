import React from "react";
import Layout from "../layout/Layout";
import Footer from "../../components/footer/Footer";
import "./CallForPapers.css";
import { Link } from "react-router-dom";
import { loginUrl } from "../../contents/constants";

const CallForPapers = () => {
  return (
    <>
      <Layout />
      <h2 className="paper-title">Call For Papers</h2>
      <div className="paper">
        <div className="paper-details">
          <Link to={loginUrl}>
            <button className="paper-submit"> Submit your Paper</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CallForPapers;
