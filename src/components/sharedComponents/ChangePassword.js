import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';

const ChangePasswordForm = ({ apiEndpoint, userRole, tokenKey }) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Get token and decode it
    const token = localStorage.getItem(tokenKey);
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id; // Extract ID from the token

    const handleChangePassword = async (e) => {
        e.preventDefault();

        // Check if newPassword and confirmPassword match
        if (newPassword !== confirmPassword) {
            setError("New password and confirm password do not match.");
            return;
        }

        setIsSubmitting(true);
        setError("");
        setMessage("");

        try {
            const response = await axios.put(
                `${apiEndpoint}/${userId}/change-password`,
                { oldPassword, newPassword },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Pass token in headers
                    },
                }
            );

            if (response.status === 200) {
                setMessage(`${userRole} password updated successfully!`);
            }
        } catch (error) {
            setError(error.response?.data?.message || "Error updating password");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form className="m-4" onSubmit={handleChangePassword}>
            <h3>Change Password </h3>

            {/* Error Message */}
            {error && <Alert variant="danger">{error}</Alert>}

            {/* Success Message */}
            {message && <Alert variant="success">{message}</Alert>}

            <Form.Group controlId="formOldPassword" className="mb-3">
                <Form.Label>Old Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter old password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formNewPassword" className="mb-3">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Updating..." : "Change Password"}
            </Button>
        </Form>
    );
};

export default ChangePasswordForm;
