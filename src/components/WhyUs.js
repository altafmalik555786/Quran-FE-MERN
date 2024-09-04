import React, { useState } from "react";
import "./WhyUs.css";
import whyUsApi from "../API/whyUsApi.js";
import { NavLink } from "react-router-dom";
import whyusimg from "../assets/whyus-rm.png";

const WhyUs = () => {
  const [aboutData] = useState(whyUsApi);
  return (
    <>
      <section className="whyus-section">
        <div className="container mb-5 whyus-container">
          <div className="row">
            {/* 1section leftt side data  */}
            <div className="col-12 col-lg-7 d-flex justify-content-center align-items-start flex-column  whyus-section-lefttside">
              <h3 className="title">Why Choose Us?</h3>
              <h1 className="heading">Simple, Reliable, Secure</h1>
              <p>
                There are number of reasons to choose Q Quranic for learning and
                reading Quran & Qaida.
              </p>
              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row info" key={id}>
                      <div className="col-1 number">{id}</div>
                      <div className="col-10 data">
                        <h2 className="data-title">{title}</h2>
                        <p className="para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn whyus-section-button">
                <NavLink className="btn-whyus p-3 btn-whyus-border" to="/whyus">
                  Learn more
                </NavLink>
              </button>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5 d-flex justify-content-center align-items-start flex-column  text-center whyus-section-rightside-img">
              <img src={whyusimg} alt="WhyUsImg" className="whyus-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
