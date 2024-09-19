// src/pages/Signup.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RegisterStudentModal from "../components/modals/registerStudentModal";
import headerbg from "../assets/bg-2.png";
import signup from "../assets/signup.webp";
import free_trail from "../assets/free_trail.png";
import "./Signup.css";
import RegisterTutorModal from "../components/modals/registerTutorModal";

const Signup = () => {
  const [registerStudentModal, setRegisterStudentModal] = useState(false);
  const [registerTutorModal, setRegisterTutorModal] = useState(false);
  const showStudentModal = () => {
    setRegisterStudentModal(true);
  };
  const hideStudentModal = () => {
    setRegisterStudentModal(false);
  };
  const showTutorModal = () => {
    setRegisterTutorModal(true);
  };
  const hideTutorModal = () => {
    setRegisterTutorModal(false);
  };
  return (
    <>
      <Navbar />
      <div className="bgdiv">
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage: `url(${headerbg})`,
          }}
        >
          <div className="d-flex page-header-title justify-content-center align-items-center h-100">
            <div className="page-header-text">
              <h1 className="mb-3 page-header-text">Register</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="signup-section">
        <div className="container signup-container">
          <div className="row">
            <div className="col-12 col-lg-12 mx-auto">
              <div className="row d-flex justify-content-between">
                <div className="signup-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    New Here <br />
                  </h1>
                  <h3>Just Register To Get Started.</h3>
                  <p className="signup-para">
                    Fill the register form and click on register button to get
                    registered with Q Quranic. After registration our team will
                    contact you on the given WhatsApp Number or Email, try to
                    respond our team accordingly.
                  </p>
                  <figure>
                    <img src={signup} alt="contatUsImg" className="img-fluid" />
                  </figure>
                </div>
                <div className="signup-rightside d-flex flex-column col-12 col-lg-4">
                  <div className="text-center">
                    <img src={free_trail} className="rounded" alt="img" />
                  </div>
                  <div className="mt-3 mb-3">
                    <h1 className="main-heading mb-2 fw-bold">
                      Claim your Free Trial now
                    </h1>
                    <h3 className="mb-2">Sign up as a Student</h3>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button
                        onClick={showStudentModal}
                        className="btn tutor-btn w-100 mb-4 p-3"
                      >
                        Sign up as a Student
                      </button>
                    </div>
                    <div className="col-12">
                      <button onClick={showTutorModal} className="btn tutor-btn w-100 mb-4 p-3">
                        Sign up as Tutor
                      </button>
                    </div>
                  </div>
                  <RegisterStudentModal
                    show={registerStudentModal}
                    hide={hideStudentModal}
                  />
                  <RegisterTutorModal
                    show={registerTutorModal}
                    hide={hideTutorModal}
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
