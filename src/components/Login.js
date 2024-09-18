import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/v1/login', { email, password });
            const { token, role } = res.data;

            // Decode the token to extract studentId
            const decoded = jwtDecode(token); // Correct method call
            const studentId = decoded.id;

            // Store token, role, and studentId in localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);
            localStorage.setItem('studentId', studentId); // Store studentId separately

            // Redirect based on user role
            if (role === 'student') {
                navigate(`/students/dashboard`); // Redirect to student profile page
            } else if (role === 'teacher') {
                navigate(`/teacher/profile`);
            }
        } catch (err) {
            console.error('Login failed', err);
            // Handle error (show error message to user)
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
