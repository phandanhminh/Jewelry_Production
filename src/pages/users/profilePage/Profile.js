import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.scss';
function Profile({ user, setUser }) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch user details
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get('http://localhost:5229/api/Account/UserDetails', {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                });
                const userDetails = response.data;
                setFullName(userDetails.fullName);
                setEmail(userDetails.email);
                setPhone(userDetails.phone);
                setAddress(userDetails.address);
            } catch (error) {
                console.error('Error fetching user details', error);
            }
        };

        fetchUserDetails();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('http://localhost:5229/api/Account/UpdateProfile', {
                fullName: fullName,
                email: email,
                phone: phone,
                address: address,
                password: password
            }, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            setMessage('Profile updated successfully!');
            setUser(email); // Update user email in parent component
        } catch (error) {
            console.error('Error updating profile', error);
            setMessage('Failed to update profile');
        }
    };

    return (
        <div className="profile">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Full Name
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </label>
                <label>
                    Email
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Phone Number
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <label>
                    Address
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </label>
                <label>
                    Password
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Save</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Profile;
