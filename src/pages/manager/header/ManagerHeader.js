import React from 'react';
import { Link } from 'react-router-dom';
import './ManagerHeader.scss';

const ManagerHeader = () => {
    return (
        <header className="manager-header">
            <div className="header-container">
                <h1>Manager Dashboard</h1>
                <nav>
                    <ul>
                        <li><Link to="/manager">Home</Link></li>
                        <li><Link to="/manager/create-product">Create Product</Link></li>
                        <li><Link to="/manager/manage-products">Manage Products</Link></li>
                        <li><Link to="/manager/profile">Profile</Link></li>
                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default ManagerHeader;
