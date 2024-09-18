import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Spinner, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudentProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const studentId = localStorage.getItem('studentId');

                // Check if token and studentId exist
                if (!token || !studentId) {
                    setError('Student not found. Please log in again.');
                    setLoading(false);
                    return;
                }

                // Fetch profile data from backend
                const res = await axios.get(`http://localhost:8000/api/v1/${studentId}/profile`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                setStudent(res.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching profile. Please try again later.');
                setLoading(false);
            }
        };

        fetchStudentProfile();
    }, []);

    // Handle loading state
    if (loading) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Spinner animation="border" />
            </Container>
        );
    }

    // Handle error state
    if (error) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Alert variant="danger">{error}</Alert>
            </Container>
        );
    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Card style={{ width: '28rem' }} className="text-center">
                <Card.Body>
                    <Card.Title>{student.name}'s Profile</Card.Title>
                    <Card.Text>Email: {student.email}</Card.Text>
                    <Card.Text>Gender: {student.gender}</Card.Text>
                    <Card.Text>Country: {student.country}</Card.Text>
                    <Card.Text>City: {student.city}</Card.Text>

                    {/* Add Edit Button */}
                    <Button variant="primary" onClick={() => navigate('/student/edit-profile')}>
                        Edit Profile
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Profile;
