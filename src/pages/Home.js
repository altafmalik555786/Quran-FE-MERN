import React from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import Numbers from "../components/Numbers";
import Courses from "../components/Courses";
import AboutUs from "../components/AboutusC";
import UseAppC from "../components/UseAppC";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";
//import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <HowItWorks />
      <Numbers />
      <Courses />
      <WhyUs />
      <UseAppC />

      {/* <Testimonials /> */}
      <Footer />
    </>
  );
};

export default Home;
