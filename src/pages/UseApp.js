import React from "react";
import "./UseApp.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import headerbg from "../assets/bg-2.png";
import UseAppC from "../components/UseAppC";
const UseApp = () => {
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
              <h1 className="mb-3 page-header-text">
                How to use Q Quranic App?
              </h1>
            </div>
          </div>
        </div>{" "}
      </div>
      {/* page header end */}
      <UseAppC />
      <Footer />
    </>
  );
};

export default UseApp;
