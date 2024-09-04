import React from "react";
import "./PageHeader.css";
import "./QaidaReading.css";
import Navbar from "../components/Navbar";
import headerbg from "../assets/bg-2.png";
import Footer from "../components/Footer";

const Qaida = () => {
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
              <h1 className="mb-3 page-header-text">Read Qaida</h1>
            </div>
          </div>
        </div>
      </div>
      {/* page header end */}

      {/* 2nd part of bayt us section  */}

      <section className="qaida-section our-courses our-courses-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-courses-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">QaidaReading</h3>
              <h1 className="main-heading">A Brief Summary</h1>
              <p className="description">
                ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ط ظ ع غ ف ق ك ل م ن و ه ء
                ي ے
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

      <Footer />
    </>
  );
};

export default Qaida;
