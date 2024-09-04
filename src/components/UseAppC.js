import React, { useState } from "react";
import "./UseAppC.css";
import useAppApi from "../API/useAppApi.js";
import { NavLink } from "react-router-dom";
import mobileapp from "../assets/mobile-app2.png";

const UseAppC = () => {
  const [aboutData] = useState(useAppApi);
  return (
    <>
      <section className="useapp-section">
        <div className="container mb-5 useapp-container">
          <div className="row ">
            <div className="col-12 col-lg-6 text-center useapp-section-leftside-img">
              <img src={mobileapp} alt="mobile-app" />
            </div>

            <div className="col-12 col-lg-6 useapp-section-rightside d-flex justify-content-center align-items-start flex-column">
              <h2 className="mini-title">Quran Tutor App</h2>
              <h3 className="main-heading alert">
                Alert: Our App is in under development!
              </h3>
              <p className="mini-para">
                We are currently developing our mobileapp so people and kids can
                easily join us and start learning just using their mobile.
              </p>
              <h3 className="main-heading">How to use the App?</h3>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row useapp-section-info" key={id}>
                      <div className="col-1 useapp-section-number">{id}</div>
                      <div className="col-10 useapp-section-data">
                        <h4 className="useapp-section-title">{title}</h4>
                        <p className="useapp-description">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn useapp-button">
                <NavLink
                  className="btn-useapp p-3 btn-useapp-border"
                  to="/useapp"
                >
                  Download App
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseAppC;
