import React, { useState } from "react";
import "./WhyUs.css";
import Navbar from "../components/Navbar";
import Numbers from "../components/Numbers";
import Footer from "../components/Footer";
import whyUsApi from "../API/whyUsApi.js";
import headerbg from "../assets/bg-2.png";
import whyus from "../assets/whyus-rm.png";
const WhyUs = () => {
  const [aboutData] = useState(whyUsApi);
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
              <h1 className="mb-3 page-header-text">Why Us</h1>
            </div>
          </div>
        </div>{" "}
      </div>
      {/* page header end */}
      <section className="whyus-sectionp">
        <div className="container mb-5 whyus-container">
          <div className="row">
            {/* 1section leftt side data  */}
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-start flex-column  whyus-section-lefttside">
              <h1 className="title">Why Choose Q Quranic?</h1>
              <h3 className="heading">
                World class Services <br /> Simple, Reliable, Secure
              </h3>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row info" key={id}>
                      <div className="col-1 number">{id}</div>
                      <div className="col-10 data">
                        <h2>{title}</h2>
                        <p className="para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-6  text-center whyus-section-rightside-img">
              <img src={whyus} alt="WhyUsImg" className="whyus-img" />
            </div>
          </div>
        </div>
      </section>
      <Numbers />
      <Footer />
    </>
  );
};

export default WhyUs;
