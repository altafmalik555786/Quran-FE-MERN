import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import VerificationInput from "react-verification-input";
import { useNavigate } from "react-router-dom";

const TutorEmailVerificationModal = ({ show, hide }) => {
  const history = useNavigate();
  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const role = localStorage.getItem("role");

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleVerifyCode = async () => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/tutor/verify-email",
        { code }
      );

      // Check if the response is a success
      if (response.status === 200) {
        toast.success("Email verified successfully!");
        hide();

        // Role-based redirection
        if (role === "student") {
          history("/students/dashboard");
        } else if (role === "tutor") {
          history("/tutor-dashboard");
        } else if (role === "admin") {
          history("/admin-dashboard");
        } else {
          history("/signup"); // Redirect to signup if role is not set
        }
      } else {
        // If verification failed (non-200 status)
        toast.error("Invalid verification code.");
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      toast.error("Error verifying code. Please try again.");
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <Modal show={show} onHide={hide} centered>
      <Modal.Header closeButton className="border-0"></Modal.Header>
      <Modal.Body className="d-flex justify-content-center border-0">
        <VerificationInput
          length={6}
          onChange={handleCodeChange}
          placeholder="_"
          autoFocus
        />
      </Modal.Body>
      <Modal.Footer className="border-0 d-flex justify-content-center">
        <Button
          variant="primary"
          className="my-4 ms-2 p-3 w-50 tutor-btn"
          onClick={handleVerifyCode}
          disabled={isSubmitting}
        >
          Verify email
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TutorEmailVerificationModal;
