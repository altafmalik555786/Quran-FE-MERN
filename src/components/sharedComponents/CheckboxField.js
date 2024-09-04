import React from 'react';

const CheckboxField = ({ label, checked, onChange, name }) => {
    return (
        <div className="form-check">
            <input
                type="checkbox"
                className="form-check-input"
                id={name}
                checked={checked}
                onChange={onChange}
                name={name}
            />
            {label && <label className="form-check-label" htmlFor={name}>{label}</label>}
        </div>
    );
};

export default CheckboxField;
