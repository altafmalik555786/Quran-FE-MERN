import React from "react";
import "./AboutusC.css";
import aboutusImg from "../assets/aboutus-img.png";
import { NavLink } from "react-router-dom";

const AboutusC = () => {
  return (
    <>
      <section className="aboutus-section">
        <div className="container mb-5 aboutus-container">
          <div className="row">
            {/* images section  right side*/}
            <div className="col-12 col-lg-6 text-center  aboutus-section-rightside-img">
              <img src={aboutusImg} alt="aboutusImg" className="about-img" />
            </div>

            {/* 1section left side data  */}
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-start flex-column aboutus-section-lefttside">
              <h1 className="title">About Q Quranic</h1>
              <h3 className="heading">A Brief Summary</h3>
              <p className="description">
                Q Quranic is the leading Online Quran Academy. Q Quranic Online
                Quran Learning Academy is providing the best of the staff and
                Have a Professional Team. We Q Quranic is offering the different
                types of Islamic courses. So, everyone can choose their desire
                course and start learning the course.
              </p>
              <br />
              <button className="btn whyus-section-button">
                <NavLink
                  className="btn-whyus p-3 btn-whyus-border"
                  to="/Aboutus"
                >
                  About Us
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutusC;
