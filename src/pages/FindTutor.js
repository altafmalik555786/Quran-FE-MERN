import React, { useEffect, useState } from "react";
import "./FindTutors.css";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import headerbg from "../assets/bg-2.png";
import tutors from "../assets/tutors.svg";
import Footer from "../components/Footer";
import axios from "axios";

const FindTutor = () => {


  const [tutor, setTutor] = useState([]);
  console.log(tutors);
  

  // Fetch tutors from the API
  useEffect(() => {
    // Fetch the list of tutors when the component mounts
    const fetchTutors = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/tutor/list"); // Assuming the backend API is available at /api/tutors
      
        setTutor(response.data.tutors);
        console.log('tutor list data', response.data.tutors);

      } catch (error) {
        console.error("Error fetching tutors:", error);
      }
    };

    fetchTutors();
  }, []);

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
          <div className="d-flex page-header-title text-center justify-content-center align-items-center h-100">
            <div className="page-header-text">
              <h1 className="mb-3 page-header-text">Tutors</h1>
            </div>
          </div>
        </div>
      </div>
      {/* page header end */}

      <section className="findtutor-section-1">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-6  findtutor-leftside d-flex justify-content-center flex-start flex-column">
              <h1 className="title">Find Your Tutor Here</h1>
              <h3 className="heading">We have experienced staff.</h3>
              <p className="description">
                Tutors at Q Quranic are very professional at their Quran
                teaching skills. They are all well education from Islamic
                education centers. <br />
                You can go through the below tutors profile and can contact the
                Q Quranic team to assign your choosin tutor on your preferable
                time.
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
            <div className="col-12 col-lg-4  findtutore-rightside d-flex justify-content-center flex-end flex-column">
              <img src={tutors} alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>

      <section className="findtutor-section-2">
        <div className="container">
          <h1 className="main-heading text-left fw-bold">
            Professional Tutors In A List
          </h1>
          <h3 className="sub-heading text-left">
            To choose any tutor, contact us to start with choosen tutor.
          </h3>
          <div className="CardsMainDiv">
            {tutor.length > 0 ? (
              tutor.map((tutor) => (
                <div key={tutor.id} className="col-md-4 mb-4">
                  <div className="card">
                  <img
                      className="card-img-top "
                      src={tutor.image ? tutor.image : "https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"} // Use default avatar if tutor.image is missing
                      alt={tutor.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{tutor.name}</h5>
                      <table className="table table-sm">
                        <tbody>
                          <tr>
                            <td>Education:</td>
                            {/* <td>{tutor.education}</td> */}
                            <td>Qari</td>
                          </tr>
                          <tr>
                            <td>Status:</td>
                            {/* <td>{tutor.status}</td> */}
                            <td>Available</td>
                          </tr>
                          <tr>
                            <td>Experience:</td>
                            {/* <td>{tutor.experience}</td> */}
                            <td>2 year</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="mt-3">
                        <a href={tutor.whatsappLink} className="btn tutor-btn w-100">
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No tutors available at the moment</p>
            )}
          </div>        </div>
      </section>

      <Footer />
    </>
  );
};

export default FindTutor;
