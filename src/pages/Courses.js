import React from "react";
import "./PageHeader.css";
import "./Courses.css";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import headerbg from "../assets/bg-2.png";
import Footer from "../components/Footer";
import courses from "../assets/courses-image.png";

const Course = () => {
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
              <h1 className="mb-3 page-header-text">Courses</h1>
            </div>
          </div>
        </div>
      </div>
      {/* page header end */}

      <section className="course-section-1">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-lg-6  courses-leftside d-flex justify-content-center flex-start flex-column">
              <h1 className="title">Course We Offere</h1>
              <h3 className="heading">Basic to advance islamic courses.</h3>
              <p className="description">
                Q Quranic provide different islamic courses inlcuding basic to
                advance level. We teach these courses we offer very well through
                a step by step process of teaching and learning.
              </p>

              <br />
              <h3 className="heading">
                Contact us to start learning from your selected tutor!
              </h3>
              <div className="text-left col-3 mt-2 findtutor-button">
                <button className="btn mt-3" type="button">
                  <NavLink
                    className="btn-findtutor p-3 btn-findtutor-border"
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </button>
              </div>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-4  courses-rightside d-flex justify-content-center flex-end flex-column">
              <img src={courses} alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>
      {/* first section end */}

      {/* second section courses starts */}
      <section className="course-section-2">
        <div className="container  justify-content-center">
          <h1 className="main-heading text-left fw-bold">
            Different Islamic Courses
          </h1>
          <h3 className="sub-heading text-left">
            To see detail of any course, just click on course name it.
          </h3>

          <div className="CardsMainDiv">
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
                alt="img here"
              />
              <div className="card-body">
                <h3 className="card-title">Basic Qaida</h3>
                <tr>
                  <p>
                    The first step in learning the Quran is to recognize, read,
                    and comprehend its alphabets. Madani Qaida is the primary
                    source for learning these Arabic alphabets. Reading the
                    Quran will be very easy for you if you have a good command
                    of this Qaida. You could contend that this is the foundation
                    for learning the Holy Quran.
                  </p>
                </tr>

                <div className="card-body d-flex justify-content-between text-center">
                  <NavLink to="#" className="course-btn1">
                    Learn More
                  </NavLink>
                  <NavLink to="/signup" className="course-btn2">
                    Enrol Now
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
                alt="img here"
              />
              <div className="card-body">
                <h3 className="card-title">Quran Tajweed</h3>
                <tr>
                  <p>
                    The first step in learning the Quran is to recognize, read,
                    and comprehend its alphabets. Madani Qaida is the primary
                    source for learning these Arabic alphabets. Reading the
                    Quran will be very easy for you if you have a good command
                    of this Qaida. You could contend that this is the foundation
                    for learning the Holy Quran.
                  </p>
                </tr>

                <div className="card-body d-flex justify-content-between text-center">
                  <NavLink to="#" className="course-btn1">
                    Learn More
                  </NavLink>
                  <NavLink to="/signup" className="course-btn2">
                    Enrol Now
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
                alt="img here"
              />
              <div className="card-body">
                <h3 className="card-title">Hifz e Quran</h3>
                <tr>
                  <p>
                    The first step in learning the Quran is to recognize, read,
                    and comprehend its alphabets. Madani Qaida is the primary
                    source for learning these Arabic alphabets. Reading the
                    Quran will be very easy for you if you have a good command
                    of this Qaida. You could contend that this is the foundation
                    for learning the Holy Quran.
                  </p>
                </tr>

                <div className="card-body d-flex justify-content-between text-center">
                  <NavLink to="#" className="course-btn1">
                    Learn More
                  </NavLink>
                  <NavLink to="/signup" className="course-btn2">
                    Enrol Now
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
                alt="img here"
              />
              <div className="card-body">
                <h3 className="card-title">Quran Translation</h3>
                <tr>
                  <p>
                    The first step in learning the Quran is to recognize, read,
                    and comprehend its alphabets. Madani Qaida is the primary
                    source for learning these Arabic alphabets. Reading the
                    Quran will be very easy for you if you have a good command
                    of this Qaida. You could contend that this is the foundation
                    for learning the Holy Quran.
                  </p>
                </tr>

                <div className="card-body d-flex justify-content-between text-center">
                  <NavLink to="#" className="course-btn1">
                    Learn More
                  </NavLink>
                  <NavLink to="/signup" className="course-btn2">
                    Enrol Now
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
                alt="img here"
              />
              <div className="card-body">
                <h3 className="card-title">Quran Memorization</h3>
                <tr>
                  <p>
                    The first step in learning the Quran is to recognize, read,
                    and comprehend its alphabets. Madani Qaida is the primary
                    source for learning these Arabic alphabets. Reading the
                    Quran will be very easy for you if you have a good command
                    of this Qaida. You could contend that this is the foundation
                    for learning the Holy Quran.
                  </p>
                </tr>

                <div className="card-body d-flex justify-content-between text-center">
                  <NavLink to="#" className="course-btn1">
                    Learn More
                  </NavLink>
                  <NavLink to="/signup" className="course-btn2">
                    Enrol Now
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
                alt="img here"
              />
              <div className="card-body">
                <h3 className="card-title">Namaz, Kalma, Dua's</h3>
                <tr>
                  <p>
                    The first step in learning the Quran is to recognize, read,
                    and comprehend its alphabets. Madani Qaida is the primary
                    source for learning these Arabic alphabets. Reading the
                    Quran will be very easy for you if you have a good command
                    of this Qaida. You could contend that this is the foundation
                    for learning the Holy Quran.
                  </p>
                </tr>

                <div className="card-body d-flex justify-content-between text-center">
                  <NavLink to="#" className="course-btn1">
                    Learn More
                  </NavLink>
                  <NavLink to="/signup" className="course-btn2">
                    Enrol Now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Course;
