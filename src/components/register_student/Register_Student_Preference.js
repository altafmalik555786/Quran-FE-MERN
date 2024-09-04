import React from 'react';
import { Form } from 'react-bootstrap';

const Register_Student_Preference = ({ formData, handleChange, errors }) => (
  <div>
    <Form.Group>
      <Form.Label>Tutor Gender Preference</Form.Label>
      <Form.Control
        as="select"
        name="tutorGender"
        value={formData.tutorGender || ''}
        onChange={handleChange}
        isInvalid={!!errors.tutorGender}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        {errors.tutorGender}
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group>
      <Form.Label>Hourly Rate</Form.Label>
      <Form.Control
        type="number"
        name="hourlyRate"
        placeholder="Hourly Rate"
        value={formData.hourlyRate || ''}
        onChange={handleChange}
        isInvalid={!!errors.hourlyRate}
      />
      <Form.Control.Feedback type="invalid">
        {errors.hourlyRate}
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group>
      <Form.Label>Subjects</Form.Label>
      <div>
        <Form.Check
          type="checkbox"
          label="English"
          name="subjects"
          value="English"
          checked={formData.subjects && formData.subjects.includes('English')}
          onChange={handleChange}
          isInvalid={!!errors.subjects}
        />
        <Form.Check
          type="checkbox"
          label="Urdu"
          name="subjects"
          value="Urdu"
          checked={formData.subjects && formData.subjects.includes('Urdu')}
          onChange={handleChange}
          isInvalid={!!errors.subjects}
        />
        <Form.Check
          type="checkbox"
          label="Math"
          name="subjects"
          value="Math"
          checked={formData.subjects && formData.subjects.includes('Math')}
          onChange={handleChange}
          isInvalid={!!errors.subjects}
        />
        <Form.Check
          type="checkbox"
          label="Physics"
          name="subjects"
          value="Physics"
          checked={formData.subjects && formData.subjects.includes('Physics')}
          onChange={handleChange}
          isInvalid={!!errors.subjects}
        />
        <Form.Control.Feedback type="invalid">
          {errors.subjects}
        </Form.Control.Feedback>
      </div>
    </Form.Group>
  </div>
);

export default Register_Student_Preference;
