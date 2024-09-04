// components/Button.js
import React from 'react';

const Button = ({ label, onClick, type = "button", variant = "primary" }) => {
    return (
        <button
            type={type}
            className={`btn btn-${variant}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
