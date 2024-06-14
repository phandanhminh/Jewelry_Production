import React from 'react';
import './ManagerFooter.scss';

const ManagerFooter = () => {
    return (
        <footer className="manager-footer">
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} Manager Dashboard. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default ManagerFooter;
