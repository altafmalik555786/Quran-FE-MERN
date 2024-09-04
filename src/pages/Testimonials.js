import React from "react";
import "./Testimonials.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "react-bootstrap/Carousel";
import headerbg from "../assets/headerbg.webp";

const Testimonials = () => {
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
            <h1 className="mb-3 page-header-text">Fee & Plans</h1>
          </div>
        </div>
      </div>
      {/* page header end */}

      <Carousel className="carousel">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="./images/hero1.png"
            alt="First slide"
            width={900}
            height={500}
          />
          <Carousel.Caption className="caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="./images/hero2.jpg"
            alt="Second slide"
            width={900}
            height={500}
          />
          <Carousel.Caption className="caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="./images/hero3.jpg"
            alt="Third slide"
            width={900}
            height={500}
          />
          <Carousel.Caption className="caption">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Footer />
    </>
  );
};

export default Testimonials;
