import React from 'react';
import { Form } from 'react-bootstrap';

const Register_Student_Timezone = ({ formData, handleChange, errors }) => {
    return (
        <div>
            <Form.Group>
                <Form.Label>Student Gender</Form.Label>
                <Form.Select
                    aria-label="Select Gender"
                    name="studentGender"
                    value={formData.studentGender || ''}
                    onChange={handleChange}
                    isInvalid={!!errors.studentGender}
                >
                    <option value="">Open this select menu</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    {errors.studentGender}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Country</Form.Label>
                <Form.Control
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country || ''}
                    onChange={handleChange}
                    isInvalid={!!errors.country}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.country}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Time Zone</Form.Label>
                <Form.Control
                    type="text"
                    name="timezone"
                    placeholder="Time Zone"
                    value={formData.timezone || ''}
                    onChange={handleChange}
                    isInvalid={!!errors.timezone}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.timezone}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city || ''}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.city}
                </Form.Control.Feedback>
            </Form.Group>
        </div>
    );
};

export default Register_Student_Timezone;
