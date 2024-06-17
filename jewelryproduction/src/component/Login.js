import React, { useState, useEffect } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";
import ForgotPassword from 'pages/users/forgotPasswordPage/ForgotPassword';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ toggle, setUser }) {
    const navigate = useNavigate();
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false); // State for "Remember Me"
    const [message, setMessage] = useState('');
    const [token, setToken] = useState(null);
    const API_URL = "http://localhost:5229/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(API_URL + 'api/Account/Login', {
                email: email,
                password: password,
            });
            setToken(response.data);

            if (rememberMe) {
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
            } else {
                localStorage.removeItem('email');
                localStorage.removeItem('password');
            }

            setUser(email); // Set the user in the parent component
            navigate('/');
            toggle(); // Close the popup
        } catch (error) {
            console.error('There was an error!!!', error);
            alert('Login failed!!!');
        }
    };

    const handleForgotPassword = () => {
        setShowForgotPassword(true);
    };

    useEffect(() => {
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');

        if (savedEmail && savedPassword) {
            setEmail(savedEmail);
            setPassword(savedPassword);
            setRememberMe(true); // Set rememberMe to true if credentials exist
        }
    }, []);

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>{showForgotPassword ? "" : "Login"}</h2>
                <span className="popup-close" onClick={toggle}><IoCloseOutline /></span>
                {!showForgotPassword && (
                    <form onSubmit={handleSubmit}>
                        <label>
                            <MdOutlineMailOutline /> Email
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label>
                            <FaLock /> Password
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>

                        <div className="remember-me">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            Remember Me
                        </div>

                        <button type="submit"><RiLoginBoxLine /> LOGIN</button>
                    </form>
                )}
                {showForgotPassword && (
                    <ForgotPassword setShowForgotPassword={setShowForgotPassword} />
                )}
                {!showForgotPassword && (
                    <button className="forgot-password" onClick={handleForgotPassword} role="link" aria-label="Forgot your password?">
                        Forgot your password?
                    </button>
                )}
            </div>
        </div>
    );
}

export default Login;
