import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  Spinner, Alert, Button, Form } from 'react-bootstrap';
import { Container, Table,  Col, Row, Card } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import StudentHeader from '../../sharedComponents/StudentHeader';
import StudentSidebar from '../../sharedComponents/StudentSidebar';

const Profile = () => {
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudentProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const studentId = localStorage.getItem('studentId');

                if (!token || !studentId) {
                    setError('Student not found. Please log in again.');
                    setLoading(false);
                    return;
                }

                const res = await axios.get(`http://localhost:8000/api/v1/${studentId}/profile`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                setStudent(res.data);
                setFormData(res.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching profile. Please try again later.');
                setLoading(false);
            }
        };

        fetchStudentProfile();
    }, []);

    const handleEdit = () => setIsEditing(true);
    const handleCancel = () => {
        setFormData(student); // Reset form data to original student data
        setIsEditing(false);
    };
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSave = async () => {
        try {
            const token = localStorage.getItem('token');
            const studentId = localStorage.getItem('studentId');

            if (!token || !studentId) {
                setError('Student not found. Please log in again.');
                return;
            }

            await axios.put(`http://localhost:8000/api/v1/${studentId}/update-profile`, formData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setStudent(formData); // Update the displayed profile data
            setIsEditing(false);
            setError('');
        } catch (err) {
            setError('Error updating profile. Please try again later.');
        }
    };

    if (loading) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Spinner animation="border" />
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Alert variant="danger">{error}</Alert>
            </Container>
        );
    }

    const allSubjects = ['Recitation', 'Math', 'Physics', 'English']; // Example list of all possible subjects

    return (
      <>
      <StudentHeader/>
      <Row>
        <Col className="col-4 col-md-3 col-xl-2">
          <StudentSidebar/>
        </Col>
        <Col md={9} className="content-col">
         
                    
        {isEditing ? (
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formCellPhone">
                                <Form.Label>Cell Phone</Form.Label>
                                <Form.Control
                                    type="text"
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
                            <Form.Group controlId="formLanguage">
                                <Form.Label>Language</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="language"
                                    value={formData.language}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formStudentGender">
                                <Form.Label>Student Gender</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="studentGender"
                                    value={formData.studentGender}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formCountry">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formTimeZone">
                                <Form.Label>Time Zone</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="timeZone"
                                    value={formData.timeZone}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formTutorGender">
                                <Form.Label>Tutor Gender</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="tutorGender"
                                    value={formData.tutorGender}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formHourlyRate">
                                <Form.Label>Hourly Rate</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="hourlyRate"
                                    value={formData.hourlyRate}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formSubjects">
                                <Form.Label>Subjects</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="subjects"
                                    value={formData.subjects.join(', ')}
                                    onChange={(e) => setFormData({ ...formData, subjects: e.target.value.split(', ') })}
                                />
                            </Form.Group>
                            <Form.Group controlId="formReceiveMessages">
                                <Form.Check
                                    type="checkbox"
                                    name="receiveMessages"
                                    checked={formData.receiveMessages}
                                    onChange={(e) => setFormData({ ...formData, receiveMessages: e.target.checked })}
                                    label="Receive Messages"
                                />
                            </Form.Group>
                        </Form>
                    ) : (
                        <>
                        
              <Table className='d-flex justify-content-center align-items-center w-100' bordered hover>
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>{student.email || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>Cell Phone</td>
                    <td>{student.cellPhone || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>Date of Birth</td>
                    <td>{student.dateOfBirth || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td>{student.language || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>Student Gender</td>
                    <td>{student.studentGender || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>Country</td>
                    <td>{student.country || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>Time Zone</td>
                    <td>{student.timeZone || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>City</td>
                    <td>{student.city || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>{student.address || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>Tutor Gender</td>
                    <td>{student.tutorGender || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>Hourly Rate</td>
                    <td>{student.hourlyRate || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>Receive Messages</td>
                    <td>{student.receiveMessages ? 'Yes' : 'No'}</td>
                  </tr>
                  <tr>
                    <td>Subjects</td>
                    <td>
                      {allSubjects.map((subject) => (
                        <Form.Check
                          key={subject}
                          type="checkbox"
                          id={`subject-${subject}`}
                          label={subject}
                          checked={student.subjects.includes(subject)}
                          disabled // Optional: Disable checkboxes if needed
                        />
                      ))}
                    </td>
                  </tr>
                </tbody>
              </Table>
           
                        </>
                    )}

                    <div className="mt-3 d-flex justify-content-center">
                        {isEditing ? (
                            <>
                                <Button variant="primary" onClick={handleSave} className="me-2 w-25">
                                    Save
                                </Button>
                                <Button variant="secondary" className='w-25' onClick={handleCancel}>
                                    Cancel
                                </Button>
                            </>
                        ) : (
                            <Button className='w-25' variant="primary d-flex justify-content-center align-items-center" onClick={handleEdit}>
                                Edit Profile
                            </Button>
                        )}
                    </div>
               
        </Col>
      </Row>
    </>
        
    );
};

export default Profile;
