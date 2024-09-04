import React from 'react';
import { Form } from 'react-bootstrap';

const Register_Student_Form = ({ formData, handleChange, errors }) => (
  <div>
    <Form.Group>
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name || ''}
        onChange={handleChange}
        isInvalid={!!errors.name}
      />
      <Form.Control.Feedback type="invalid">
        {errors.name}
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group>
      <Form.Label>Email</Form.Label>
      <Form.Control
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email || ''}
        onChange={handleChange}
        isInvalid={!!errors.email}
      />
      <Form.Control.Feedback type="invalid">
        {errors.email}
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password || ''}
        onChange={handleChange}
        isInvalid={!!errors.password}
      />
      <Form.Control.Feedback type="invalid">
        {errors.password}
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group>
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword || ''}
        onChange={handleChange}
        isInvalid={!!errors.confirmPassword}
      />
      <Form.Control.Feedback type="invalid">
        {errors.confirmPassword}
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group>
      <Form.Check
        type="checkbox"
        label="I agree to the terms and conditions"
        name="termsAgreed"
        checked={formData.termsAgreed || false}
        onChange={handleChange}
        isInvalid={!!errors.termsAgreed}
      />
      <Form.Control.Feedback type="invalid">
        {errors.termsAgreed}
      </Form.Control.Feedback>
    </Form.Group>
  </div>
);

export default Register_Student_Form;
