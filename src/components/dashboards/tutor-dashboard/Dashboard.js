import React, { useEffect, useState } from 'react'
import { MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import { Row, Col, Button, Badge } from "react-bootstrap";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegCommentDots, FaStar } from 'react-icons/fa';
import axios from 'axios';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  console.log(students);

  const [activeTab, setActiveTab] = useState("recommended");
  useEffect(() => {
    // Fetch the list of tutors when the component mounts
    const fetchTutors = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/students-list"); // Assuming the backend API is available at /api/tutors
        const sortedTutors = response.data.students
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by createdAt in descending order
          .slice(0, 5); // Get the first 6 tutors

        setStudents(sortedTutors);
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
        <Col md={4}>
          <div className="d-flex border-bottom mb-3 py-3 gap-2 align-items-center">
            <MdMessage size={12} color="#28a745" />
            <p className="fs-5 text-secondary m-0">Current Students:</p>
          </div>
          <p className="mb-3">Nobody has hired you yet</p>
          <Link to="/findtutors" className="btn tutor-btn" variant="success">
            Find Tutor
          </Link>
        </Col>

        {/* Right Column: Tabs Section */}
        <Col md={8}>
          <div className="d-flex justify-content-start border-bottom pb-3">
            {/* Recommended Tab */}
            <div
              className={`cursor-pointer border rounded d-flex align-items-center p-2 me-3 ${activeTab === 'recommended' ? 'bg-success text-light' : 'bg-primary-hover'}`}
              onClick={() => setActiveTab('recommended')}
            >
              <FaEyeSlash className="me-2" size={18} color="#000" />
              <p className="m-0">Recommended</p>
            </div>

            {/* Sent Invites Tab */}
            <div
              className={`cursor-pointer border rounded d-flex align-items-center p-2 ${activeTab === 'invites' ? 'bg-success text-light' : ''}`}
              onClick={() => setActiveTab('invites')}
            >
              <Badge className="rounded-circle bg-danger me-2">6</Badge>
              <FaEyeSlash className="me-2" size={14} color="#000" />
              <p className="m-0">Sent Invites</p>
            </div>
          </div>

          {/* Conditional Content Based on Active Tab */}
          <div className="py-3">
            {activeTab === 'recommended' && (
              <div>
                {students.length > 0 ? (
                  students.map((tutor) => (
                    <div key={tutor.id} className="border p-3 mb-3">
                      <Row>
                        {/* Tutor Avatar */}
                        <Col lg={2}>
                          {tutor.image ? (
                            <img
                              src={tutor.image}
                              alt="Profile"
                              style={{
                                width: "80px",
                                height: "80px",
                                borderRadius: "50%", // For rounded-circle effect
                                // Ensures the image fits within the circle without distortion
                              }}
                            />
                          ) : (
                            <p>No profile image available</p>
                          )}
                        </Col>

                        {/* Tutor Information */}
                        <Col lg={8}>
                          <a className="userName" href={`/tutors/${tutor.id}/profile`}>
                            {tutor.name}
                          </a>

                          {/* Rating */}
                          <div className="d-flex mt-2">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className={i < tutor.rating ? 'text-warning' : 'text-muted'} />
                            ))}
                          </div>

                          <p>
                            Can teach: <strong>{tutor.subjects.join(', ')}</strong>
                          </p>
                          <p>
                            Time Zone: <strong>{tutor.timeZone}</strong>
                          </p>
                          <p>
                            Hourly Rate: <strong>US$ {tutor.hourlyRate}/hr</strong>
                          </p>

                          <Button className="mt-2" variant="success">
                            Invite to Teach
                          </Button>
                        </Col>

                        {/* Chat Icon */}
                        <Col lg={2} className="d-flex align-items-center">
                          <a href="#!" className="msgbtnIcon">
                            <FaRegCommentDots size={24} />
                          </a>
                        </Col>
                      </Row>
                    </div>
                  ))
                ) : (
                  <p>No tutors found</p>
                )}
              </div>
            )}

            {activeTab === 'invites' && (
              <div>
                <h5>Sent Invites</h5>
                <p>List of sent invites will appear here...</p>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard