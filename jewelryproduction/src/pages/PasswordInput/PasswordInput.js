import React, { useState } from 'react';
import './style.scss';

const PasswordInput = ({ id, placeholder, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="password-container">
            <input 
                type={showPassword ? 'text' : 'password'} 
                id={id} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <span 
                className="toggle-password" 
                onClick={togglePasswordVisibility}
            >
                {showPassword ? '🙈' : '👁️'}
            </span>
        </div>
    );
};

export default PasswordInput;