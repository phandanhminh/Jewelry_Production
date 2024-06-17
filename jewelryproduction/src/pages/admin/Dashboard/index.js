import React, { useState, useEffect } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import './style.scss';
import PasswordInput from 'pages/PasswordInput/PasswordInput';

const AdminDashboard = () => {
    const [accounts, setAccounts] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [newAccount, setNewAccount] = useState({
        username: '',
        password: '',
        status: 'active',
        role: 'manager'
    });

    useEffect(() => {
        // Load accounts from localStorage on component mount
        const storedAccounts = JSON.parse(localStorage.getItem('accounts'));
        if (storedAccounts) {
            setAccounts(storedAccounts);
        }
    }, []);

    const handleStatusChange = (index, newStatus) => {
        const updatedAccounts = [...accounts];
        updatedAccounts[index].status = newStatus;
        setAccounts(updatedAccounts);
        localStorage.setItem('accounts', JSON.stringify(updatedAccounts)); // Save to localStorage
    };

    const handleRoleChange = (index, newRole) => {
        const updatedAccounts = [...accounts];
        updatedAccounts[index].role = newRole;
        setAccounts(updatedAccounts);
        localStorage.setItem('accounts', JSON.stringify(updatedAccounts)); // Save to localStorage
    };

    const handleSave = (index) => {
        const updatedAccount = accounts[index];
        // Save updated accounts to localStorage
        localStorage.setItem('accounts', JSON.stringify(accounts));
    };

    const handleCreateAccount = () => {
        const updatedAccounts = [...accounts, newAccount];
        setAccounts(updatedAccounts);
        localStorage.setItem('accounts', JSON.stringify(updatedAccounts)); // Save to localStorage
        setShowCreateForm(false);
        setNewAccount({
            username: '',
            password: '',
            status: 'active',
            role: 'manager'
        });
    };

    const handleCreateClick = () => {
        setShowCreateForm(true);
    };

    const handleCloseForm = () => {
        setShowCreateForm(false);
        setNewAccount({
            username: '',
            password: '',
            status: 'active',
            role: 'manager'
        });
    };

    return (
        <div className="admin-dashboard">
            <div className="header">
                <h1 className="header2">Admin Dashboard</h1>
                <button className="create-button" onClick={handleCreateClick}>
                    <FaPlus />
                </button>
            </div>
            {showCreateForm && (
                <div className="popup">
                    <div className="popup-inner">
                        <span className="popup-close" onClick={handleCloseForm}><IoCloseOutline /></span>
                        <h2 className="popup-inner1">Create Account</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleCreateAccount();
                        }}>
                            <label>
                                Username:
                                <input type="text" name="username" value={newAccount.username} onChange={(e) => setNewAccount({ ...newAccount, username: e.target.value })} required />
                            </label>
                            <label>
                                Password:
                                <PasswordInput
                                    id="new-password"
                                    placeholder="Enter password"
                                    value={newAccount.password}
                                    onChange={(e) => setNewAccount({ ...newAccount, password: e.target.value })}
                                />
                            </label>
                            <label>
                                Status:
                                <select name="status" value={newAccount.status} onChange={(e) => setNewAccount({ ...newAccount, status: e.target.value })} required>
                                    <option value="active">Active</option>
                                    <option value="banner">Banner</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </label>
                            <label>
                                Role:
                                <select name="role" value={newAccount.role} onChange={(e) => setNewAccount({ ...newAccount, role: e.target.value })} required>
                                    <option value="manager">Manager</option>
                                    <option value="staff">Staff</option>
                                </select>
                            </label>
                            <button type="submit">Create</button>
                        </form>
                    </div>
                </div>
            )}
            <table className="accounts-table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Status</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account, index) => (
                        <tr key={index}>
                            <td>{account.username}</td>
                            <td>
                                <PasswordInput 
                                    id={`password-${index}`}
                                    placeholder="Enter password"
                                    value={account.password}
                                    onChange={(e) => {
                                        const newAccounts = [...accounts];
                                        newAccounts[index].password = e.target.value;
                                        setAccounts(newAccounts);
                                        localStorage.setItem('accounts', JSON.stringify(newAccounts)); // Save to localStorage
                                    }}
                                />
                            </td>
                            <td>
                                <select 
                                    value={account.status} 
                                    onChange={(e) => handleStatusChange(index, e.target.value)}
                                >
                                    <option value="active">Active</option>
                                    <option value="banner">Banner</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </td>
                            <td>
                                <select 
                                    value={account.role} 
                                    onChange={(e) => handleRoleChange(index, e.target.value)}
                                >
                                    <option value="manager">Manager</option>
                                    <option value="staff">Staff</option>
                                </select>
                            </td>
                            <td>
                                <button onClick={() => handleSave(index)}>Save</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;