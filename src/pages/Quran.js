import React from "react";
import "./PageHeader.css";
import "./QuranReading.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import headerbg from "../assets/headerbg.webp";

const Quran = () => {
  return (
    <>
      <Navbar />

      {/* page header start */}
      <div
        className="p-5 text-center bg-image"
        style={{
          // backgroundImage:
          //   "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          backgroundImage: `url(${headerbg})`,
          height: 400,
        }}
      >
        <div className="d-flex page-header-title justify-content-center align-items-center h-100">
          <div className="page-header-text">
            <h1 className="mb-3 page-header-text">Read Quran</h1>
          </div>
        </div>
      </div>
      {/* page header end */}

      {/* 2nd part of bayt us section  */}

      <section className="common-section our-courses our-courses-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-courses-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">QuranReading</h3>
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

      <Footer />
    </>
  );
};

export default Quran;
