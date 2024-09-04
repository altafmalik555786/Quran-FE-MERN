import React, { useState } from "react";
import "./PageHeader.css";
import "./Contact.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import headerbg from "../assets/bg-2.png";

const Contact = () => {
  const history = useNavigate();
  var [response, setresponse] = useState("");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  function submitData(e) {
    e.preventDefault();
    axios
      .post("/contactus", userData)
      .then((res) => {
        if (res.data) {
          setresponse(res.data);
        } else {
          history.push("/");
        }
      })
      .catch((err) => {
        setresponse("Oops! 500 server error");
      });
  }

  return (
    <>
      <Navbar />

      {/* page header start there*/}
      <div className="bgdiv">
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage: `url(${headerbg})`,
          }}
        >
          <div className="d-flex page-header-title justify-content-center align-items-center h-100">
            <div className="page-header-text">
              <h1 className="mb-3 page-header-text">Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
      {/* page header end */}

      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect with us <br />
                  </h1>

                  <div className="contact-list">
                    <h3 className="contact-heading">Phone:</h3>
                    <div className="contact-item">
                      <div className="contact-icon-div">
                        <i
                          className="fa fa-phone contact-icon"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="contact-text">00923007575666</div>
                    </div>

                    <h3 className="contact-heading">WhatsApp:</h3>
                    <div className="contact-item">
                      <div className="contact-icon-div">
                        <i
                          className="fa fa-whatsapp contact-icon"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="contact-text">00923007575666</div>
                    </div>

                    <h3 className="contact-heading">Email:</h3>
                    <div className="contact-item">
                      <div className="contact-icon-div">
                        <i
                          className="fa fa-envelope contact-icon"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="contact-text">contact@qquranic.com</div>
                    </div>
                  </div>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <h1>Contact Form:</h1>
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Address"
                          value={userData.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Message"
                          value={userData.message}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="form-check form-checkbox-style">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label main-hero-para">
                        I agree that the Q Quranic may contact me at the email
                        address or phone number I provide.
                      </label>
                    </div>
                    <h4 className="text-danger text-center">{response}</h4>
                    <button
                      type="submit"
                      className="btn contactP-btn w-100"
                      onClick={submitData}
                    >
                      Submit
                    </button>
                  </form>
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

export default Contact;
