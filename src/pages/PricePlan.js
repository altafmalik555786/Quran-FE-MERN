import React, { useState } from "react";
import "./PricePlan.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import headerbg from "../assets/bg-2.png";
import feeplan from "../assets/feeplan.webp";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';

const PricePlan = () => {
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  // Function to handle plan registration
  const handleRegisterPlan = async (planId) => {
    setSelectedPlanId(planId); // Set the selected plan ID
    const token = localStorage.getItem('token');

    // Check if token exists
    if (!token) {
      console.error("No token found");
      return;
    }

    const decodedToken = jwtDecode(token);
    const studentId = decodedToken.id;
    console.log('plan student id', studentId);

    const url = `http://localhost:8000/api/v1/add-student-plan/${studentId}`; // Adjust the URL based on your setup

    try {
      const response = await axios.post(url, { planId });

      if (response.status === 200) {
        console.log("Plan registered successfully:", response.data);
        // Optionally, you can show a success message or redirect the user
      }
    } catch (error) {
      console.error("Error registering plan:", error.response ? error.response.data : error.message);
      // Optionally, show an error message
    }
  };

  return (
    <>
      <Navbar />

      {/* Page header start */}
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
      {/* Page header end */}

      <section className="feeplan-section-1">
        <div className="container mb-5">
          <div className="row">
            {/* Section left side data */}
            <div className="col-12 col-lg-6 feeplan-leftside d-flex justify-content-center flex-start flex-column">
              <h1 className="title">Q Quranic Fee & Plans</h1>
              <h3 className="heading">Plans that match everyone's needs..</h3>
              <p className="description">
                Q Quran Fee and Plans are very flexible to match everyone's needs. We take a very small amount so everyone can take classes and learn from us.
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

            {/* Images section */}
            <div className="col-12 col-lg-4 feeplan-rightside d-flex justify-content-center flex-end flex-column">
              <img src={feeplan} alt="about us" />
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
                  <button className="button" onClick={() => handleRegisterPlan("BASIC_PLAN_ID")}> {/* Replace with actual plan ID */}
                    Register
                  </button>
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
                  <button className="button" onClick={() => handleRegisterPlan("STANDARD_PLAN_ID")}> {/* Replace with actual plan ID */}
                    Register
                  </button>
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
                  <button className="button" onClick={() => handleRegisterPlan("PREMIUM_PLAN_ID")}> {/* Replace with actual plan ID */}
                    Register
                  </button>
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
