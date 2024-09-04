import React, { useState } from "react";
import "./Courses.css";
import coursesApi from "../API/coursesApi.js";
import { NavLink } from "react-router-dom";

const Courses = () => {
  const [serviceData] = useState(coursesApi);
  return (
    <>
      <section className="courses-section">
        <div className="container course-container justify-content-center">
          <h1 className="main-heading text-left fw-bold">Our Courses</h1>
          <h4 className="sub-heading text-left">Choose your desired course</h4>
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div
                    className="col-12 col-lg-4 col-xxl-4 text-left courses-container-subdiv"
                    key={id}
                  >
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="course-description">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="text-center col-3 mt-5 courses-button">
            <button className="btn" type="button">
              <NavLink
                className="btn-howitworks p-3 btn-howitworks-border"
                to="/courses"
              >
                All Courses
              </NavLink>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
