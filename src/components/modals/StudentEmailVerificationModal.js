import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import VerificationInput from "react-verification-input";
import { useNavigate } from "react-router-dom";

const StudentEmailVerificationModal = ({ show, onHide }) => {
  const navigate = useNavigate(); // useNavigate instead of history
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
        "http://localhost:8000/api/v1/verify-email",
        { code }
      );

      // Check if the response is successful
      if (response.data.message === "Email verified successfully.") {
        toast.success(response.data.message);
        onHide();

        // Redirect based on user role
        if (role === "student") {
          navigate("/students/dashboard");
        } else if (role === "teacher") {
          navigate("/tutor-dashboard");
        } else if (role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/signup");
        }
      } else {
        // In case the response is not successful
        toast.error(response.data.message || "Invalid verification code.");
      }
    } catch (error) {
      // Error handling for failed request
      toast.error("Error verifying code.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
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

export default StudentEmailVerificationModal;
