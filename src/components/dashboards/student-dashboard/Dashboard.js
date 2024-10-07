import React, { useEffect, useState } from "react";
import { Row, Col, Button, Badge, Modal, Form } from "react-bootstrap";
import { MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaRegCommentDots, FaStar, FaEyeSlash } from 'react-icons/fa';
import axios from "axios";
import ChatModal from "../../modals/ChatModal";

const Dashboard = () => {
  const [tutors, setTutors] = useState([]);
  const [activeTab, setActiveTab] = useState("recommended");
  const [showModal, setShowModal] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/tutor/list");
        const sortedTutors = response.data.tutors
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          
        setTutors(sortedTutors);
      } catch (error) {
        console.error("Error fetching tutors:", error);
      }
    };
    fetchTutors();
  }, []);

  const handleChatClick = (tutor) => {
    setSelectedTutor(tutor);
    setShowModal(true);
  };

  const handleSendMessage = async () => {
    try {
      await axios.post('/api/messages', {
        tutorId: selectedTutor._id,
        message: message,
        sender: 'student',
      });
      setMessage('');
      setShowModal(false); // Close the modal after sending
      alert('Message sent successfully!'); // Optional: Show a success message
    } catch (error) {
      console.error('Error sending message', error);
      alert('Error sending message'); // Show an error message if failed
    }
  };
  const handleClose = () => setShowModal(false);
  

  return (
    <>
      <Row>
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

        <Col sm={12} md={6} lg={6} xl={6}>
          <Row className="py-3 px-4 border-bottom">
            <Col className="cursor-pointer" sm={12} md={6} lg={6} xl={6}>
              <div
                onClick={() => setActiveTab("recommended")}
                className={`d-flex border rounded ${activeTab === "recommended" ? "bg-success text-light " : "bg-primary-hover"
                  } border-secondary align-items-center p-2 w-50`}
              >
                <FaEyeSlash className="me-2" size={18} color="#000" />
                <p className="m-0">Recommended</p>
              </div>
            </Col>

            <Col className="cursor-pointer" sm={12} md={6} lg={6} xl={6}>
              <div
                onClick={() => setActiveTab("invites")}
                className={`d-flex align-items-center p-2 border rounded ${activeTab === "invites" ? "bg-success text-light" : "w-50"
                  }`}
              >
                <Badge className="rounded-circle bg-danger me-2 text-white">6</Badge>
                <FaEyeSlash className="me-2" size={14} color="#000" />
                <p className="m-0">Sent Invites</p>
              </div>
            </Col>
          </Row>

          <Row className="px-4 py-3">
            {activeTab === "recommended" && (
              <div className="student-list">
                {tutors.length > 0 ? (
                  tutors.map((tutor) => (
                    <div key={tutor.id} className="sugst-box border p-3 mb-3">
                      <Row>
                        <Col lg={2}>
                          <img
                            width="100%"
                            alt={`${tutor.name} avatar`}
                            className="avatar rounded-circle"
                            src={tutor.avatar ? tutor.avatar : "https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"}
                          />
                        </Col>

                        <Col lg={8}>
                          <a className="userName" href={`/tutors/${tutor.id}/profile`}>
                            {tutor.name}
                          </a>

                          <div className="sugstRating d-flex">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={i < tutor.rating ? "text-warning" : "text-warning"}
                                size={18}
                              />
                            ))}
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
                            tutor_id={tutor._id}
                            variant="success"
                            type="button"
                            onClick={async () => {
                              try {
                                const studentId = "your_student_id"; // Replace with the actual student ID

                                const response = await axios.post(
                                  "http://localhost:8000/api/v1/send",
                                  { tutorId: tutor._id, studentId }
                                );

                                alert(response.data.message);
                              } catch (error) {
                                alert('Error sending invite');
                                console.error('Invite error:', error.response?.data || error.message);
                              }
                            }}
                          >
                            Invite to Teach
                          </Button>
                        </Col>

                        {/* Chat Button */}
                        <Col lg={2} className="d-flex flex-column justify-content-center">
                          <Button variant="link" onClick={() => handleChatClick(tutor)}>
                            <FaRegCommentDots size={24} />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ))
                ) : (
                  <p>No tutors found</p>
                )}
              </div>
            )}
            {activeTab === "invites" && (
              <div>
                <h5>Sent Invites</h5>
                <p>List of sent invites will appear here...</p>
              </div>
            )}
          </Row>
        </Col>
      </Row>
      
      
      <ChatModal selectedTutor={selectedTutor} showModal={showModal} handleClose={handleClose} />


    </>
  );
};

export default Dashboard;
