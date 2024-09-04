import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { NavDropdown } from "react-bootstrap";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import menulogo from "../assets/menu-logo1.png";



const Navbar = () => {
  const RenderMenu = () => {
    return (
      <>
        {/* <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">
            Home
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/findtutors">
            Tutors
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/courses">
            Courses
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/priceplan">
            Fee & Plans
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/qaida">
            Read
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/aboutus">
            About Us
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/faqs">
            FAQs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/whyus">
            Why Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/howitworks">
            How
          </NavLink>
        </li>

        <li className="nav-item">
          <form className="d-flex register-button">
            <button
              className="btn  nav-btn-style"
              type="submit"
              onClick={() => history.push("/signup")}
            >
              Register
            </button>
          </form>
        </li>
      </>
    );
  };

  // toggle bar in mobile view click functionality
  const [show, setShow] = useState(false);
  const history = useNavigate();

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container d-flex justify-content-between ">
            <div className="brand-div">
              <NavLink className="nav-link navbar-brand" to="/">
                <img src={menulogo} alt="qquranic logo" className="logo" />
              </NavLink>
              {/* <img
                src={logo}
                alt="qquranic-logo"
                className="nav-link navbar-brand"
              /> */}
            </div>
            <div className="navbar-div">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShow(!show)}
              >
                {/* <span className="navbar-toggler-icon"></span> */}
                <i className="fas fa-bars navbar-bars"></i>
              </button>
              <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <RenderMenu />
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
