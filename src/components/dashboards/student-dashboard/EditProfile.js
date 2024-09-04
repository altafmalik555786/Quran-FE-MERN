import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchStudent, updateStudentProfile } from "../../features/student/studentActions";
import { fetchStudent,updateStudentProfile } from "../../../store/student/studentActions";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import StudentHeader from "../../sharedComponents/StudentHeader";
import StudentSidebar from "../../sharedComponents/StudentSidebar";
import Loader from "../../sharedComponents/Loader";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { student, status, error } = useSelector((state) => state.student);
  const studentId = useSelector((state) => state.auth.user ? state.auth.user._id : null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cellPhone: '',
    dateOfBirth: '',
    // Initialize other fields as necessary
  });

  useEffect(() => {
    if (studentId) {
      dispatch(fetchStudent(studentId));
    }
  }, [dispatch, studentId]);

  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name || '',
        email: student.email || '',
        cellPhone: student.cellPhone || '',
        dateOfBirth: student.dateOfBirth || '',
        // Set other fields as necessary
      });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStudentProfile({ studentId, formData }));
  };

  if (status === 'loading') return <Loader />; // Use Loader component for loading state
  if (status === 'failed') return <p>Error: {error}</p>; // Handle errors

  return (
    <>
      <StudentHeader />
      <Row>
        <Col className='col-4 col-md-3 col-xl-2'>
          <StudentSidebar />
        </Col>
        <Col md={9} className="content-col">
          <Container>
            <h2>Edit Profile</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled // Typically, email is not editable
                />
              </Form.Group>
              <Form.Group controlId="formCellPhone">
                <Form.Label>Cell Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your cell phone number"
                  name="cellPhone"
                  value={formData.cellPhone}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formDateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </Form.Group>
              {/* Add more fields as needed */}
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default EditProfile;
