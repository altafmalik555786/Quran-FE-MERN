import React from "react";
import "./Numbers.css";

function Numbers() {
  return (
    <>
      <section className="numbers-section">
        <div className="container numbers-container">
          <div className="row">
            <div className="col-4 col-lg-4 d-flex justify-content-around flex-column align-items-center p-5">
              <h2 className="number-title">1212</h2>
              <p className="number-heading">Registered Students</p>
            </div>
            <div className="col-4 col-lg-4 d-flex justify-content-around flex-column align-items-center p-5">
              <h2 className="number-title">125</h2>
              <p className="number-heading">Available Tutors</p>
            </div>
            <div className="col-4 col-lg-4 d-flex justify-content-around flex-column align-items-center p-5">
              <h2 className="number-title">133</h2>
              <p className="number-heading">Session Completed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Numbers;
