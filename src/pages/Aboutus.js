import React from "react";
import "./PageHeader.css";
import "./Aboutus.css";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import headerbg from "../assets/bg-2.png";
import Numbers from "../components/Numbers";
import UseAppC from "../components/UseAppC";
import ceoimg from "../assets/ceo.png";

const Aboutus = () => {
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
              <h1 className="mb-3 page-header-text">About Us</h1>
            </div>
          </div>
        </div>
      </div>
      {/* page header end */}

      <section className="aboutus-section-1">
        <div className="container aboutus-container">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 d-flex justify-content-center align-items-start flex-column aboutus-section-lefttside">
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

              <div className="button-row">
                <button className="btn ">
                  <NavLink
                    className="btn-style1 p-3 btn-howitworks-border"
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </button>
                <button className="btn ">
                  <NavLink
                    className="btn-style2 p-3 btn-howitworks-border"
                    to="/signup"
                  >
                    Get Trial
                  </NavLink>
                </button>
              </div>
            </div>

            {/* images section  right-side*/}
            <div className="col-12 col-lg-5 text-center  rightside-img">
              <img
                src="./images/aboutsection.png"
                alt="aboutusImg"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="aboutus-section-2">
        <div className="container aboutus-container">
          <div className="row">
            <div className="col-12 col-lg-5 text-center  rightside-img">
              <img src={ceoimg} alt="aboutusImg" className="about-img" />
            </div>

            <div className="col-12 col-lg-7 d-flex justify-content-center align-items-start flex-column aboutus-section-lefttside">
              <h1 className="title">A Message From CEO Q Quranic</h1>
              <h3 className="heading">-Muhammad Yousuf</h3>
              <p className="description">
                AOA, My aim is to make every muslim able to learn all about
                islamic education, specially The Holly Quran. <br />
                We have build a complete setup to provide online islamic
                learning worldwide using internet mediums. Through kids, adults
                and old one's can learn every aspect of islam. All of you help
                us to spread the knwoledge and join people more and more by
                sharing the Q Quranic Aim.
              </p>
              <br />
              <h3>Reach the CEO of Q Quranic by:</h3> <br />
              <div className="button-row">
                <a
                  href="tel:+923007575666"
                  className="btn btn-style1 p-3 btn-howitworks-border"
                >
                  Call
                </a>
                <a
                  href="https://wa.link/p18hhb"
                  className="btn btn-style2 p-3 btn-howitworks-border"
                >
                  WhatsApp
                </a>
                {/* <button className="btn ">
                  <NavLink
                    className="btn-style2 p-3 btn-howitworks-border"
                    to="/signup"
                  >
                    Get Trial
                  </NavLink>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Numbers />
      <UseAppC />
      <Footer />
    </>
  );
};

export default Aboutus;
