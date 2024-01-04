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
        <section className="paper-details">
          <h2 className="paper-heading">{data.callForPaper.paperHeading}</h2>
          <p className="paper-represent">{data.callForPaper.represent}</p>
          <p className="paper-content">{data.callForPaper.paperDescription}<Link to={loginUrl}>here</Link></p>
        </section>
        <section className="paper-date-authers">
          <h3>{data.callForPaper.importantDatesForAuthorsTitle}</h3>
          <h4>{data.callForPaper.importantDatesForAuthorsContents.conferenceDate}</h4>
          <h4>{data.callForPaper.importantDatesForAuthorsContents.FinalArticleSubmissionToTheSystem}</h4>
          <h4>{data.callForPaper.importantDatesForAuthorsContents.ArticleReviewDeadline}</h4>
        </section>
        <section className="paper-genaral-info">
          <h3>{data.callForPaper.GeneralSubmissionInformation.GeneralSubmissionInformationTitle}</h3>
          <ol>
            <li>{data.callForPaper.GeneralSubmissionInformation.GeneralSubmissionInformation1}</li>
            <li>{data.callForPaper.GeneralSubmissionInformation.GeneralSubmissionInformation2}</li>
            <li>{data.callForPaper.GeneralSubmissionInformation.GeneralSubmissionInformation3}</li>
            <li>{data.callForPaper.GeneralSubmissionInformation.GeneralSubmissionInformation4}</li>
            <li>{data.callForPaper.GeneralSubmissionInformation.GeneralSubmissionInformation5}</li>
            <li>{data.callForPaper.GeneralSubmissionInformation.GeneralSubmissionInformation6}</li>
            <li>{data.callForPaper.GeneralSubmissionInformation.GeneralSubmissionInformation7}</li>
          </ol>
        </section>
        <Link to={loginUrl}>
          <button className="paper-submit"> Submit Your Paper</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default CallForPapers;
