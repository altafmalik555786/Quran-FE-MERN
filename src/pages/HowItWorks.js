import React, { useState } from "react";
import "./HowItWorks.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import howItWorkApi from "../API/howItWorkApi.js";
import headerbg from "../assets/bg-2.png";
import HowItWorksC from "../components/HowItWorks";
import UseAppC from "../components/UseAppC";
const HowItWorks = () => {
  const [workData] = useState(howItWorkApi);
  console.log(workData);
  return (
    <>
      <Navbar />
      {/* page header start */}{" "}
      <div className="bgdiv">
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage: `url(${headerbg})`,
          }}
        >
          <div className="d-flex page-header-title justify-content-center align-items-center h-100">
            <div className="page-header-text">
              <h1 className="mb-3 page-header-text">How It Works</h1>
            </div>
          </div>
        </div>
      </div>
      {/* page header end */}
      <HowItWorksC />
      <UseAppC />
      <Footer />
    </>
  );
};

export default HowItWorks;
