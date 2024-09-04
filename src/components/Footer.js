import React from "react";
import "./Footer.css";
import footerlogo from "../assets/footer-logo1.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        {/* <hr className="hr-footer-top" /> */}

        <div className="container">
          <div className="row3">
            <div className="col-12 col-lg-12 mx-auto">
              <div className="row">
                <div className="col-12 col-lg-3 coloumn-1 d-grid">
                  {/* <h2 className="footer-title">Q Quranic</h2> */}
                  <img
                    src={footerlogo}
                    alt="footer-logo"
                    className="footer-logo"
                  />
                  <br />
                  <p className="footer-para">
                    Q Quranic is the leading Online Quran Academy. Q Quranic
                    Online Quran Learning Academy is providing the best of the
                    staff and Have a Professional Team. We Q Quranic is offering
                    the different types of Islamic courses. So, everyone can
                    choose their desire course and start learning the course.
                  </p>
                </div>

                <div className="col-12 col-lg-3 coloumn-2">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <NavLink to="/aboutus">About Us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/faqs">FAQs</NavLink>
                    </li>
                    <li>
                      <NavLink to="/priceplan">Prices and Plans</NavLink>
                    </li>

                    <li>
                      <NavLink to="/privacypolicy">Privacy Policy</NavLink>
                    </li>
                    <li>
                      <NavLink to="/tos">ToS</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-lg-3 coloumn-3">
                  <h2>Usefull Links</h2>
                  <ul>
                    <li>
                      <NavLink to="/findtutors">Find Tutors</NavLink>
                    </li>
                    {/* <li>
                      <NavLink to="/testimonials">Testimonials</NavLink>
                    </li> */}
                    <li>
                      <NavLink to="/howitworks">How It Works?</NavLink>
                    </li>
                    <li>
                      <NavLink to="/useapp">How to use App?</NavLink>
                    </li>
                    {/* <li>
                      <NavLink to="/quran">Read Quran</NavLink>
                    </li> */}
                    {/* <li>
                      <NavLink to="/qaida">Read Qaida</NavLink>
                    </li> */}
                  </ul>
                </div>

                <div className="col-12 col-lg-3 coloumn-4">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-2 mx-auto">
                      <a href="https://web.facebook.com/qquranic">
                        <i className="fab fa-facebook-f fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-2 mx-auto">
                      <a href="https://www.instagram.com/q__quranic/">
                        <i className="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-2 mx-auto">
                      <a href="https://www.youtube.com/c/qquranic">
                        <i className="fab fa-youtube fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-2 mx-auto">
                      <a href="https://twitter.com/qquranic">
                        <i className="fab fa-twitter fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-2 mx-auto">
                      <a href="https://linkedin.com/qquranic">
                        <i className="fab fa-linkedin fontawesome-style"></i>
                      </a>
                    </div>
                  </div>

                  <div className="row2">
                    <div className="col-12 mx-auto img2">
                      <a href="/">
                        <img
                          src="./images/playstore.png"
                          alt="App Store"
                          className="playstore-logo"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hr-footer-bottom" />

              <div className="mt-5 d-flex copyright-row">
                <div className=" flex-start">
                  <p className="copyright-text ">
                    Copyright @ {new Date().getFullYear()} Q Quranic. All rights
                    reserved.
                  </p>
                </div>
                <div className=" flex-end">
                  <p className="copyright-made">
                    Made with{" "}
                    <span role="img" aria-label="heart">
                      ♥️
                    </span>{" "}
                    By <a href="https://crudics.com">crudics</a>
                  </p>
                </div>
              </div>
              {/* <div className="mt-5">
                <p className="main-hero-para1 text-right ">
                  Made By crudics.com
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
