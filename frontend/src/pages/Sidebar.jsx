import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "20px", backgroundColor: "#333", height: "100vh" }}>
            <Link to="/profile" style={{ textDecoration: "none", marginBottom: "10px" }}>
                <div style={{ width: "150px", height: "50px", backgroundColor: "#1E90FF", color: 'white', display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8px" }}>
                    Profile
                </div>
            </Link>
            <Link to="/user-requests" style={{ textDecoration: "none", marginBottom: "10px" }}>
                <div style={{ width: "150px", height: "50px", backgroundColor: "#1E90FF", color: 'white', display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8px" }}>
                    New User Requests
                </div>
            </Link>
            <Link to="/user-management" style={{ textDecoration: "none" }}>
                <div style={{ width: "150px", height: "50px", backgroundColor: "#1E90FF", color: 'white', display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8px" }}>
                    Total Users
                </div>
            </Link>
        </div>
    );
};

export default Sidebar;
