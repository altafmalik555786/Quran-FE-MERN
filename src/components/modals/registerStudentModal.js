import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { registerStudent } from "../../store/student/studentActions";
import { setCredentials } from "../../store/auth/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentEmailVerificationModal from "./StudentEmailVerificationModal";

const RegisterStudentModal = ({ show, hide }) => {
  const dispatch = useDispatch();
  // const status = useSelector((state) => state.student.status);
  // const error = useSelector((state) => state.student.error);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [validated, setValidated] = useState(false);
  const [step, setStep] = useState(1);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    studentGender: "",
    country: "",
    timeZone: "",
    city: "",
    role: "student",
    tutorGender: "",
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

  const handleNextStep = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    if (step === 1) {
      if (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.termsAgreed
      ) {
        toast.error("Please fill all required fields.");
        setValidated(true);
        return;
      }
      setValidated(false);
    } else if (step === 2) {
      if (
        !formData.studentGender ||
        !formData.country ||
        !formData.timeZone ||
        !formData.city
      ) {
        toast.error("Please fill all required fields.");
        setValidated(true);
        return;
      }
      setValidated(false);
    }
    setStep(step + 1);
  };
  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false && formData.subjects.length === 0) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      if (formData.subjects.length === 0) {
        toast.error("Please select at least one subject.");
      }
    } else {
      e.preventDefault();
      setValidated(false);

      try {
        // Dispatch the registerStudent action
        const resultAction = await dispatch(registerStudent(formData));
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
      }
    }
  };

  return (
    <>
      <Modal show={show} onHide={hide} centered>
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body className="px-5">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {step === 1 && (
              <>
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
                <Form.Group className="mb-3" controlId="termsAgreed">
                  <Form.Check
                    type="checkbox"
                    id="termsAgreed"
                    label="I have read and agree to the terms of use"
                    name="termsAgreed"
                    className="mx-2 p-3 d-flex align-items-center gap-3"
                    checked={formData.termsAgreed}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please agree to the terms and conditions.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  className="my-4 p-3 w-25 tutor-btn"
                  onClick={handleNextStep}
                >
                  Next
                </Button>
              </>
            )}
            {step === 2 && (
              <>
                <Form.Group controlId="formGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    aria-label="Select gender"
                    name="studentGender"
                    className="my-2"
                    value={formData.studentGender}
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
                <Button
                  variant="secondary"
                  className="my-2 p-3 w-25"
                  onClick={handlePrevStep}
                >
                  Previous
                </Button>
                <Button
                  className="my-4 ms-2 p-3 w-25 tutor-btn"
                  onClick={handleNextStep}
                >
                  Next
                </Button>
              </>
            )}
            {step === 3 && (
              <>
                <Form.Group controlId="formTutorGender">
                  <Form.Label>Tutor Gender</Form.Label>
                  <Form.Select
                    aria-label="Select tutor gender"
                    name="tutorGender"
                    className="my-2"
                    value={formData.tutorGender}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled hidden>
                      Select tutor gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="either">Either</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please select a tutor gender.
                  </Form.Control.Feedback>
                </Form.Group>

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

                <Form.Group className="mb-3">
                  <Form.Label className="mb-2">Subjects</Form.Label>
                  <div className="d-flex align-items-center gap-3">
                    <Form.Check
                      type="checkbox"
                      label="Recitation"
                      name="subjects"
                      value="Recitation"
                      className="mx-2 p-3 d-flex align-items-center gap-3"
                      checked={formData.subjects.includes("Recitation")}
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Tajweed"
                      name="subjects"
                      value="Tajweed"
                      className="mx-2 p-3 d-flex align-items-center gap-3"
                      checked={formData.subjects.includes("Tajweed")}
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Translation"
                      name="subjects"
                      value="Translation"
                      className="mx-2 p-3 d-flex align-items-center gap-3"
                      checked={formData.subjects.includes("Translation")}
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Fiqh"
                      name="subjects"
                      value="Fiqh"
                      className="mx-2 p-3 d-flex align-items-center gap-3"
                      checked={formData.subjects.includes("Fiqh")}
                      onChange={handleChange}
                    />
                  </div>
                  <Form.Control.Feedback type="invalid">
                    Please select at least one subject.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant="secondary"
                  className="my-2 p-3 w-25"
                  onClick={handlePrevStep}
                >
                  Previous
                </Button>
                <Button type="submit" className="my-4 ms-2 p-3 w-25 tutor-btn">
                  Submit
                </Button>
              </>
            )}
          </Form>
        </Modal.Body>
      </Modal>

      <StudentEmailVerificationModal
        show={showVerificationModal}
        onHide={() => setShowVerificationModal(false)}
        email={email}
        code={code}
      />
    </>
  );
};

export default RegisterStudentModal;
