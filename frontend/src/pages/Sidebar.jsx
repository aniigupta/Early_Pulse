import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaUserPlus, FaUsers } from 'react-icons/fa';
import UserManagement from './UserManagement';

const Sidebar = () => {
    const linkStyle = {
        textDecoration: 'none',
        marginBottom: '20px',
    };

    const buttonStyle = {
        width: '100%',
        height: '55px',
        background: 'linear-gradient(135deg, #1E90FF, #0C6FBF)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '12px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease, background 0.4s ease',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
    };

    const iconStyle = {
        marginRight: '10px',
        fontSize: '18px',
    };

    return (
        <div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 20px',
            backgroundColor: '#1F1F1F',
            height: '100vh',
            width: '250px',
            position: 'fixed',
            top: '0',
            left: '0',
            boxShadow: '4px 0 15px rgba(0, 0, 0, 0.3)',
            justifyContent: 'flex-start',
            zIndex: '1000',
        }}>
            <h2 style={{ color: 'white', marginBottom: '30px', fontSize: '22px', fontWeight: 'bold', textAlign: 'center' }}>
                Admin Dashboard
            </h2>

            <Link to="/Profile" style={linkStyle}>
                <div style={buttonStyle}>
                    <FaUser style={iconStyle} />
                    Profile
                </div>
            </Link>

            <Link to="/user-requests" style={linkStyle}>
                <div style={buttonStyle}>
                    <FaUserPlus style={iconStyle} />
                    New User Requests
                </div>
            </Link>

            <Link to="/user-management" style={linkStyle}>
                <div style={buttonStyle}>
                    <FaUsers style={iconStyle} />
                    Total Users
                </div>
            </Link>
        </div>
        </div>
    );
};

export default Sidebar;
