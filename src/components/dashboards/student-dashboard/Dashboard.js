import React, { useEffect, useState } from "react";
import { Row, Col, Button, Badge } from "react-bootstrap";
import { MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaRegCommentDots, FaStar,FaEyeSlash } from 'react-icons/fa';
import axios from "axios";

const Dashboard = () => {
  const [tutors, setTutors] = useState([]);
  const [activeTab, setActiveTab] = useState("recommended");


  useEffect(() => {
    // Fetch the list of tutors when the component mounts
    const fetchTutors = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/tutor/list"); // Assuming the backend API is available at /api/tutors
        const sortedTutors = response.data.tutors
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by createdAt in descending order
          .slice(0, 5); // Get the first 6 tutors

        setTutors(sortedTutors);
        console.log('tutor list data', response.data.tutors);

      } catch (error) {
        console.error("Error fetching tutors:", error);
      }
    };

    fetchTutors();
  }, []);
  return (
    <>
      <Row>
        {/* Left Column: Current Tutors Section */}
        <Col sm={12} md={4} lg={4} xl={4}>
          <div className="d-flex border-bottom mb-3 py-3 px-4 gap-2 align-items-center">
            <p className="m-0">
              <MdMessage size={12} color="#28a745" />
            </p>
            <p className="fs-5 text-secondary m-0">Current Tutors:</p>
          </div>
          <p className="mb-3">You have not hired anyone yet</p>
          <Link to="/findtutors" className="btn tutor-btn" variant="success">
            Find Tutor
          </Link>
        </Col>

        {/* Right Column: Tabs Section */}
        <Col sm={12} md={6} lg={6} xl={6}>
          <Row className="py-3 px-4 border-bottom">
            {/* Recommended Tab */}
            <Col className="cursor-pointer" sm={12} md={6} lg={6} xl={6}>
              <div
                onClick={() => setActiveTab("recommended")} // Set active tab to "recommended"
                className={`d-flex border rounded ${activeTab === "recommended" ? "bg-success text-light " : "bg-primary-hover"
                  } border-secondary align-items-center p-2 w-50`}
              >
                <FaEyeSlash className="me-2" size={18} color="#000" />
                <p className="m-0">Recommended</p>
              </div>
            </Col>

            {/* Sent Invites Tab */}
            <Col className="cursor-pointer" sm={12} md={6} lg={6} xl={6}>
              <div
                onClick={() => setActiveTab("invites")} // Set active tab to "invites"
                className={`d-flex align-items-center p-2 border rounded ${activeTab === "invites" ? "bg-success text-light" : "w-50"
                  }`}
              >
                <Badge className="rounded-circle bg-danger me-2 text-white">6</Badge>
                <FaEyeSlash className="me-2" size={14} color="#000" />
                <p className="m-0">Sent Invites</p>
              </div>
            </Col>
          </Row>

          {/* Conditional Content Rendering */}
          <Row className="px-4 py-3">
            {activeTab === "recommended" && (
              <div>
                {/* Dynamically render tutors */}
                {tutors.length > 0 ? (
                  tutors.map((tutor) => (
                    <div key={tutor.id} className="sugst-box border p-3 mb-3">
                      <Row>
                        {/* Tutor Avatar */}
                        <Col lg={2}>
                          <img
                            width="100%"
                            alt={`${tutor.name} avatar`}
                            className="avatar rounded-circle"
                            src={tutor.avatar ? tutor.avatar : "https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"} // Use default avatar if tutor.avatar is missing
                          />
                        </Col>


                        {/* Tutor Information */}
                        <Col lg={8}>
                          <a className="userName" href={`/tutors/${tutor.id}/profile`}>
                            {tutor.name}
                          </a>

                          <div className="sugstRating d-flex">
                            {/* Display tutor's rating using React Icons */}
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={i < tutor.rating ? "text-warning" : "text-warning"}
                                size={18}
                              />
                            ))}

                          </div>

                          <div>
                          </div>
                          <div>
                            Can teach: <strong>{tutor.subjects.map((item, index) => (
                              <span key={index}>{item}{index < tutor.subjects.length - 1 ? ', ' : ''}</span>
                            ))}</strong>
                          </div>

                          <div>
                            Time Zone: <strong>{tutor.timeZone}</strong>
                          </div>
                          <div>
                            Hourly Rate: <strong>US$ {tutor.hourlyRate}/hr</strong>
                          </div>

                          <Button
                            className="invite2teach mt-2"
                            tutor_id={tutor.id}
                            variant="success"
                            type="button"
                          >
                            Invite to Teach
                          </Button>
                        </Col>

                        {/* Action Buttons */}
                        <Col lg={2} className="d-flex flex-column justify-content-center">
                          <a className="msgbtnIcon start-chat" href="#.">
                            <FaRegCommentDots size={24} />
                          </a>
                        </Col>
                      </Row>
                    </div>
                  ))
                ) : (
                  <p>No tutors found</p> // Message if no tutors are available
                )}
              </div>
            )}
            {activeTab === "invites" && (
              <div>
                {/* Sent Invites Content */}
                <h5>Sent Invites</h5>
                <p>List of sent invites will appear here...</p>
              </div>
            )}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
