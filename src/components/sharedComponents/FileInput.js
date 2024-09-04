// components/FileInput.js
import React from 'react';

const FileInput = ({ label, onChange, name }) => {
    return (
        <div className="form-group">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type="file"
                className="form-control-file"
                id={name}
                onChange={onChange}
                name={name}
            />
        </div>
    );
};

export default FileInput;
