import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import TutorSidebar from '../../sharedComponents/TutorSidebar';
import TutorHeader from '../../sharedComponents/TutorHeader';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const EditProfile = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [file, setFile] = useState(null); // For handling the image file

  const [formData, setFormData] = useState({
    hourlyRate: '',
    language: '',
    fiqh: '',
    sect: '',
    description: '', // New field for description
    subjects: [], // New field for subjects
  });

  // Handle both text input and file (image) input changes in one function
  const handleChange = (e) => {
    const { name, value, files, checked } = e.target;

    if (name === 'image') {
      setFile(files[0]); // Store the selected file
    } else if (name === 'subjects') {
      // Handle checkbox selection
      if (checked) {
        // Add the selected subject to the array
        setFormData((prevState) => ({
          ...prevState,
          subjects: [...prevState.subjects, value],
        }));
      } else {
        // Remove the unselected subject from the array
        setFormData((prevState) => ({
          ...prevState,
          subjects: prevState.subjects.filter((subject) => subject !== value),
        }));
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object for sending the data including the image
    const formDataToSend = new FormData();
    formDataToSend.append('hourlyRate', formData.hourlyRate);
    formDataToSend.append('language', formData.language);
    formDataToSend.append('fiqh', formData.fiqh);
    formDataToSend.append('sect', formData.sect);
    formDataToSend.append('description', formData.description); // Add description
    formDataToSend.append('subjects', JSON.stringify(formData.subjects)); // Add subjects as JSON

    if (file) {
      formDataToSend.append('image', file); // Append the selected image file
    }

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        setError('Token not found. Please log in again.');
        setLoading(false);
        return;
      }

      const decodedToken = jwtDecode(token);
      const studentId = decodedToken.id;
      const response = await axios.put(
        `http://localhost:8000/api/v1/tutor/${studentId}/edit`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Important for file upload
          },
        }
      );

      if (response.status === 200 || response.data.message === 'Tutor updated successfully.') {
        setFormData({
          hourlyRate: '',
          language: '',
          fiqh: '',
          sect: '',
          description: '',
          subjects: [],
        });
        setFile(null); // Reset the image file state
        console.log('Profile updated successfully', response.data);
      } else {
        setError('Failed to update profile.');
      }

      console.log('Tutor updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating tutor profile:', error.response?.data || error.message);
      setError('An error occurred while updating the profile.');
    }
  };

  return (
    <>
      <TutorHeader />
      <Row>
        <Col className="col-4 col-md-3 col-xl-2">
          <TutorSidebar />
        </Col>
        <Col md={9} className="content-col p-4">
          <Form className='col-sm-12 col-md-5' onSubmit={handleSubmit}>
            <Form.Group controlId="hourlyRate">
              <Form.Label>Hourly Rate</Form.Label>
              <Form.Control
                type="text"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleChange}
                placeholder="$0.0"
                required
              />
            </Form.Group>

            <Form.Group controlId="language">
              <Form.Label>Language</Form.Label>
              <Form.Control
                type="text"
                name="language"
                value={formData.language}
                onChange={handleChange}
                placeholder="Enter your language"
              />
            </Form.Group>

            <Form.Group controlId="fiqh">
              <Form.Label>Fiqh</Form.Label>
              <Form.Control
                type="text"
                name="fiqh"
                value={formData.fiqh}
                onChange={handleChange}
                placeholder="Enter your fiqh (Shafii)"
              />
            </Form.Group>

            <Form.Group controlId="sect">
              <Form.Label>Sect</Form.Label>
              <Form.Control
                type="text"
                name="sect"
                value={formData.sect}
                onChange={handleChange}
                placeholder="Type your Sect here, e.g., Sunni, Shia, etc."
              />
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Profile Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
              />
            </Form.Group>

            {/* Description Field */}
            <Form.Group controlId="description">
              <Form.Label>About</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about yourself"
                rows={3}
              />
            </Form.Group>

            {/* Subjects Checkbox */}
            <Form.Group>
              <Form.Label>Subjects</Form.Label>
              <div>
                <Form.Check
                  type="checkbox"
                  label="Hafiz"
                  value="Hafiz"
                  checked={formData.subjects.includes('Hafiz')}
                  onChange={handleChange}
                  name="subjects"
                />
                <Form.Check
                  type="checkbox"
                  label="Recitation"
                  value="Recitation"
                  checked={formData.subjects.includes('Recitation')}
                  onChange={handleChange}
                  name="subjects"
                />
                <Form.Check
                  type="checkbox"
                  label="Tajweed"
                  value="Tajweed"
                  checked={formData.subjects.includes('Tajweed')}
                  onChange={handleChange}
                  name="subjects"
                />
                <Form.Check
                  type="checkbox"
                  label="Arabic"
                  value="Arabic"
                  checked={formData.subjects.includes('Arabic')}
                  onChange={handleChange}
                  name="subjects"
                />
              </div>
            </Form.Group>

            <Button type="submit" className="btn btn-success my-4">
              Save Changes
            </Button>
          </Form>
          {error && <div className="alert alert-danger">{error}</div>}
        </Col>
      </Row>
    </>
  );
};

export default EditProfile;
