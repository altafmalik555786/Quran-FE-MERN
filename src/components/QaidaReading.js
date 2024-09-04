import React from "react";
import "./QaidaReading.css";

const QaidaReading = () => {
  return (
    <>
      {/* 2nd part of bayt us section  */}

      <section className="common-section our-courses our-courses-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-courses-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">QaidaReading</h3>
              <h1 className="main-heading">A Brief Summary</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus reprehenderit molestias impedit eius voluptates
                voluptatum? Obcaecati assumenda blanditiis vel, est at dolores
                consequuntur dicta fugiat pariatur eos iusto, error
                perspiciatis.
              </p>

              <br />
              <button className="btn-style btn-style-border">About Us</button>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  our-service-rightside-img">
              <img src="./images/hero1.png" alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QaidaReading;
