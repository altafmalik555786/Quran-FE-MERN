import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerTutor } from "../../store/tutor/tutorAction";
import { setCredentials } from "../../store/auth/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentEmailVerificationModal from "./StudentEmailVerificationModal";
import TutorEmailVerificationModal from "./TutorEmailVerificationModal";

const RegisterTutorModal = ({ show, hide }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [validated, setValidated] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    tutorGender: "",
    phone: "",
    country: "",
    timeZone: "",
    city: "",
    role: "tutor",
    termsAgreed: false,
    hourlyRate: "",
    subjects: [],
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (type === "checkbox" && name === "subjects") {
      setFormData((prevFormData) => {
        const updatedSubjects = checked
          ? [...prevFormData.subjects, value]
          : prevFormData.subjects.filter((subject) => subject !== value);
        return { ...prevFormData, subjects: updatedSubjects };
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false || formData.subjects.length === 0) {
      e.stopPropagation();
      setValidated(true);
      if (formData.subjects.length === 0) {
        toast.error("Please select at least one subject.");
      }
    } else {
      setValidated(false);

      try {
        const resultAction = await dispatch(registerTutor(formData));
        const { error } = resultAction;

        if (error) {
          toast.error("An error occurred during registration.");
        } else {
          const response = resultAction.payload;
          console.log('response', response);

          const { token, user } = response;
          const { role } = user;  // Destructure role from user

          console.log('role1', role);


          console.log('role from user', role);  // Log to verify the role is correct

          dispatch(setCredentials({ token, role }));
          localStorage.setItem("token", token);
          localStorage.setItem("role", role);
          setEmail(response.email);
          setCode(response.verificationCode);

          setShowVerificationModal(true);
          hide();
          toast.success(
            response.message || "Registration completed successfully!"
          );
        }
      } catch (error) {
        console.log(error, "error");
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <Modal show={show} onHide={hide} centered>
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body className="px-5">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Name */}
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                className="my-2"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a name.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Email */}
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                className="my-2"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                className="my-2"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a password.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Gender */}
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                aria-label="Select gender"
                name="tutorGender"
                className="my-2"
                value={formData.tutorGender}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select a gender.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Phone */}
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="phone"
                className="my-2"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a phone number.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Country */}
            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country"
                name="country"
                className="my-2"
                value={formData.country}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a country.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Time Zone */}
            <Form.Group controlId="formTimeZone">
              <Form.Label>Time Zone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter time zone"
                name="timeZone"
                className="my-2"
                value={formData.timeZone}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a time zone.
              </Form.Control.Feedback>
            </Form.Group>

            {/* City */}
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                name="city"
                className="my-2"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a city.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Hourly Rate */}
            <Form.Group controlId="formHourlyRate">
              <Form.Label>Hourly Rate</Form.Label>
              <Form.Select
                aria-label="Select hourly rate"
                name="hourlyRate"
                className="my-2"
                value={formData.hourlyRate}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>
                  Select hourly rate
                </option>
                <option value="3-5">$3-5</option>
                <option value="5-10">$5-10</option>
                <option value="10+">$10+</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select an hourly rate.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Subjects */}
            <Form.Group className="mb-3">
              <Form.Label className="mb-2">Subjects</Form.Label>
              <div className="d-flex align-items-center gap-3">
                <Form.Check
                  type="checkbox"
                  label="Recitation"
                  name="subjects"
                  value="Recitation"
                  checked={formData.subjects.includes("Recitation")}
                  onChange={handleChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Tajweed"
                  name="subjects"
                  value="Tajweed"
                  checked={formData.subjects.includes("Tajweed")}
                  onChange={handleChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Translation"
                  name="subjects"
                  value="Translation"
                  checked={formData.subjects.includes("Translation")}
                  onChange={handleChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Fiqh"
                  name="subjects"
                  value="Fiqh"
                  checked={formData.subjects.includes("Fiqh")}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>

            {/* Terms and Conditions */}
            <Form.Group controlId="formTerms">
              <Form.Check
                type="checkbox"
                label="I agree to the Terms and Conditions"
                name="termsAgreed"
                checked={formData.termsAgreed}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                You must agree before submitting.
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-3 w-100">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {showVerificationModal && (
        <TutorEmailVerificationModal
          show={showVerificationModal}
          hide={() => setShowVerificationModal(false)}
          email={email}
          code={code}
        />
      )}
    </>
  );
};

export default RegisterTutorModal;
