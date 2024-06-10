import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

function Register(props) {
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleRegister(e) {
        e.preventDefault()
        // Code to handle login goes here
        props.toggle()
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Register</h2>
                <span className="popup-close" onClick={props.toggle}><IoCloseOutline /></span>

                <form onSubmit={handleRegister}>
                    <label>
                        <MdOutlineMailOutline /> Email
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <MdDriveFileRenameOutline /> Full Name
                        <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} />
                    </label>
                    <label>
                        <FaPhone /> Phone Number
                        <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                    </label>
                    <label>
                        <FaLock /> Password
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                    <label>
                        <FaLock /> Confirm password
                        <input type="text" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    </label>
                    <button type="submit">Register</button>
                </form>

            </div>
        </div>
    )
}
export default Register;