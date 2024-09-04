// components/InputField.js
import React from 'react';

const InputField = ({ label, type = "text", placeholder, value, onChange, name }) => {
    return (
        <div className="form-group">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type={type}
                className="form-control"
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
            />
        </div>
    );
};

export default InputField;
