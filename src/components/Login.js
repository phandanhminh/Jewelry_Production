import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false); // State for "Remember Me"
    function handleLogin(e) {
        e.preventDefault();
        // Code to handle login goes here
        if (rememberMe) {
            localStorage.setItem('email', email); // Store email in localStorage
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('email');
            localStorage.removeItem('password');
        }

        props.toggle();
    }

    function handleForgotPassword() {
        // Code to handle forgot password goes here
        console.log("Redirecting to forgot password page...");
        // You can replace the above line with actual navigation to the forgot password page
        // For example, if using React Router: history.push('/forgot-password')
    }
    React.useEffect(() => {
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
                <h2>Login</h2>
                <span className="popup-close" onClick={props.toggle}><IoCloseOutline /></span>
                <form onSubmit={handleLogin}>
                    <label>
                        <MdOutlineMailOutline /> Email
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <FaLock /> Password
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
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
                <button className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</button>
            </div>
        </div>
    );
}

export default Login;
