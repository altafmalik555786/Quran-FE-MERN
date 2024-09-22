import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner, Alert, Button, Form } from 'react-bootstrap';
import { Container, Table, Col, Image, Row, Card } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';
import ceo from '../../../assets/ceo.png'
import { useNavigate } from 'react-router-dom';
import StudentHeader from '../../sharedComponents/StudentHeader';
import StudentSidebar from '../../sharedComponents/StudentSidebar';
import ChangePasswordForm from '../../sharedComponents/ChangePassword';

const Profile = () => {
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const [file, setFile] = useState(null); // For handling the image file

    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudentProfile = async () => {
            try {
                const token = localStorage.getItem('token');

                if (!token) {
                    setError('Token not found. Please log in again.');
                    setLoading(false);
                    return;
                }

                // Decode token to get student ID
                const decodedToken = jwtDecode(token);
                const studentId = decodedToken.id;

                // Fetch student profile based on the ID extracted from the token
                const res = await axios.get(`http://localhost:8000/api/v1/${studentId}/profile`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log('profile data', res);

                setStudent(res.data);
                setFormData(res.data);  // Set form data for editing if needed
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
        setFormData(student);  // Reset form data to original student data
        setIsEditing(false);
    };

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setFile(e.target.files[0]); // Handle image file separately
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };
    const handleSave = async () => {
        try {
            const token = localStorage.getItem('token');
            const decodedToken = jwtDecode(token);
            const studentId = decodedToken.id;

            // Use FormData to append text fields and file for upload
            const data = new FormData();
            data.append('name', formData.name);
            data.append('email', formData.email);
            // Append other fields as needed...
            if (file) {
                data.append('image', file); // Append the image file if selected
            }

            await axios.put(`http://localhost:8000/api/v1/${studentId}/update-profile`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data' // Ensure correct headers for file upload
                }
            });

            setStudent(formData);  // Update displayed profile data
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



    return (
        <>
            <StudentHeader />
            <Row>
                <Col className="col-4 col-md-3 col-xl-2">
                    <StudentSidebar />
                </Col>

                <Col md={9} className="content-col">
                    <div>
                        <ChangePasswordForm
                            apiEndpoint="http://localhost:8000/api/v1/"
                            userRole="student"
                            tokenKey="token" />
                    </div>

                    {isEditing ? (
                        <Form className='m-4'>
                            <Form.Group controlId="formImage">
                                <Form.Label>Upload Profile</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                />
                            </Form.Group>


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
                                <div className='d-flex flex-wrap'>
                                    {['Recitation', 'Translation', 'Fiqh', 'Tajweed'].map((subject) => (
                                        <Form.Check
                                            key={subject}
                                            type="checkbox"
                                            id={`subject-${subject}`}
                                            label={subject}
                                            checked={formData.subjects.includes(subject)}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    // Add the subject if it's checked
                                                    setFormData({
                                                        ...formData,
                                                        subjects: [...formData.subjects, subject]
                                                    });
                                                } else {
                                                    // Remove the subject if it's unchecked
                                                    setFormData({
                                                        ...formData,
                                                        subjects: formData.subjects.filter(s => s !== subject)
                                                    });
                                                }
                                            }}
                                            className="me-3 mb-2"
                                        />
                                    ))}
                                </div>
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




                            <div className='m-4 md-'>

                                <Row>
                                    {/* First Row */}
                                    <h3>Profile Info: </h3>

                                    <Col xs={12} md={4} lg={3} className="p-3">
                                        <label><strong>Profile Image:</strong></label>
                                        <div className="border p-2">
                                            {student.image ? (
                                                <Image src={student.image} roundedCircle width={150} height={150} />
                                            ) : (
                                                <p>No profile image available</p>
                                            )}
                                        </div>
                                    </Col>
                                    <Col xs={12} md={4} lg={3} className="p-3">
                                        <label><strong>Email:</strong></label>
                                        <div className='border p-2'>{student.email || 'N/A'}</div>
                                    </Col>
                                    <Col xs={12} md={4} lg={3} className="p-3">
                                        <label><strong>Cell Phone:</strong></label>
                                        <div className='border p-2'>{student.cellPhone || 'N/A'}</div>
                                    </Col>
                                    <Col xs={12} md={4} lg={3} className="p-3">
                                        <label><strong>Date of Birth:</strong></label>
                                        <div className='border p-2'>{student.dateOfBirth || 'N/A'}</div>
                                    </Col>

                                    {/* Second Row */}
                                    <Col xs={12} md={4} lg={3} className="p-3">
                                        <label><strong>Language:</strong></label>
                                        <div className='border p-2'>{student.language || 'N/A'}</div>
                                    </Col>
                                    <Col xs={12} md={4} lg={3} className="p-3">
                                        <label><strong>Student Gender:</strong></label>
                                        <div className='border p-2'>{student.studentGender || 'N/A'}</div>
                                    </Col>
                                    <Col xs={12} md={4} lg={3} className="p-3">
                                        <label><strong>Country:</strong></label>
                                        <div className='border p-2'>{student.country || 'N/A'}</div>
                                    </Col>

                                    {/* Third Row */}
                                    <Col xs={12} md={4} lg={3} className="p-3">
                                        <label><strong>Time Zone:</strong></label>
                                        <div className='border p-2'>{student.timeZone || 'N/A'}</div>
                                    </Col>
                                    <Col xs={12} md={4} lg={3} className="p-3">
                                        <label><strong>City:</strong></label>
                                        <div className='border p-2'>{student.city || 'N/A'}</div>
                                    </Col>
                                    <Col xs={12} md={4} lg={3} className="p-3">
                                        <label><strong>Address:</strong></label>
                                        <div className='border p-2'>{student.address || 'N/A'}</div>
                                    </Col>

                                    {/* Fourth Row */}
                                    <Col xs={12} md={4} lg={3} className="p-3">
                                        <label><strong>Tutor Gender:</strong></label>
                                        <div className='border p-2'>{student.tutorGender || 'N/A'}</div>
                                    </Col>
                                    <Col xs={12} md={4} lg={3} className="p-3">
                                        <label><strong>Hourly Rate:</strong></label>
                                        <div className='border p-2'>{student.hourlyRate || 'N/A'}</div>
                                    </Col>
                                    <Col xs={12} md={4} lg={3} className="p-3">
                                        <label><strong>Receive Messages:</strong></label>
                                        <div className='border p-2'>{student.receiveMessages ? 'Yes' : 'No'}</div>
                                    </Col>

                                    {/* Fifth Row for Subjects */}
                                    <Col xs={12} md={4} lg={4} className="p-3">
                                        <label><strong>Subjects:</strong></label>
                                        <div className='border p-2 d-flex flex-wrap'> {/* Apply Bootstrap classes for flex layout */}
                                            {student.subjects && student.subjects.length > 0 ? (
                                                student.subjects.map((subject) => (
                                                    <Form.Check
                                                        className="me-3" // Add margin for spacing between items
                                                        key={subject}
                                                        type="checkbox"
                                                        id={`subject-${subject}`}
                                                        label={subject}
                                                        checked={student.subjects.includes(subject)}
                                                        disabled
                                                    />
                                                ))
                                            ) : (
                                                <div>N/A</div> // Optional: Show a message if no subjects are available
                                            )}
                                        </div>
                                    </Col>


                                </Row>
                            </div>




                        </>
                    )}

                    <div className="m-4 d-flex justify-content-start">
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
