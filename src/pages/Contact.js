import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./PageHeader.css";
import "./Contact.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import headerbg from "../assets/bg-2.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pvpjo0s",
        "template_cwtztg2",
        form.current,
        "owYdIWE4hEb1fwUpn"
      )
      .then(
        (result) => {
          console.log(result.text);
          var response = result.text;
        },
        (error) => {
          console.log(error.text);
          var response = error.text;
        }
      );
    e.target.reset();
  };

  const history = useNavigate();
  var [response, setresponse] = useState("");
  const [userData, setUserData] = useState({
    Name: "",
    email: "",
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
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="user_name"
                          id="Name"
                          className="form-control"
                          placeholder="Full Name"
                          required
                          // value={userData.firstName}
                          // onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="user_email"
                          id="email"
                          className="form-control"
                          placeholder="Your Email"
                          required
                          // value={userData.email}
                          // onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 contact-input-feild">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="form-control"
                        placeholder="Subject"
                        required
                        // value={userData.email}
                        // onChange={postUserData}
                      />
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
                          required
                        />
                      </div>
                    </div>

                    <h4 className="text-danger text-center">{response}</h4>
                    <button
                      type="submit"
                      className="btn contactP-btn w-100"
                      // onClick={submitData}
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
