import React from "react";
import "./PricePlan.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import headerbg from "../assets/bg-2.png";
import feeplan from "../assets/feeplan.webp";

const PricePlan = () => {
  return (
    <>
      <Navbar />

      {/* page header start */}
      <div className="bgdiv">
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage: `url(${headerbg})`,
          }}
        >
          <div className="d-flex page-header-title justify-content-center align-items-center h-100">
            <div className="page-header-text">
              <h1 className="mb-3 page-header-text">Fee & Plans</h1>
            </div>
          </div>
        </div>
      </div>
      {/* page header end */}

      <section className="feeplan-section-1">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-6  feeplan-leftside d-flex justify-content-center flex-start flex-column">
              <h1 className="title">Q Quranic Fee & Plans</h1>
              <h3 className="heading">Plans that match everyone needs..</h3>
              <p className="description">
                Q Quran Fee and Plans are very flexible to match every one
                needs. We take very less amount so everyone can take classes and
                learn from us.
              </p>

              <br />
              <h3 className="heading">
                Contact us to start learning from your selected tutor!
              </h3>
              <div className="text-left col-3 mt-2 feeplan-button">
                <button className="btn mt-3" type="button">
                  <NavLink
                    className="btn-feeplan p-3 btn-feeplan-border"
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </button>
              </div>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-4  feeplan-rightside d-flex justify-content-center flex-end flex-column">
              <img src={feeplan} alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>

      <section className="findtutor-section-2">
        <div className="container">
          <div className="row">
            <div className="columns">
              <ul className="price">
                <li className="header">Basic</li>
                <li className="grey">30-$ / Month</li>
                <li>3 Days A Week</li>
                <li>30 Minutes</li>
                <li>Screen Sharing</li>
                <li>Male/Female</li>
                <li className="grey">
                  <NavLink className="button" to="/signup">
                    Register
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="columns">
              <ul className="price">
                <li className="header" style={{ backgroundColor: "#04AA6D" }}>
                  Standard
                </li>
                <li className="grey">40-$ / Month</li>
                <li>4 Days A Week</li>
                <li>30 Minutes</li>
                <li>Screen Sharing</li>
                <li>Male/Female</li>
                <li className="grey">
                  <NavLink className="button" to="/signup">
                    Register
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="columns">
              <ul className="price">
                <li className="header">Premium</li>
                <li className="grey">50-$ / Month</li>
                <li>5 Days A Week</li>
                <li>30 Minutes</li>
                <li>Screen Sharing</li>
                <li>Male/Female</li>
                <li className="grey">
                  <NavLink className="button" to="/signup">
                    Register
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PricePlan;
