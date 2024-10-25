import React from 'react';

const Profile = () => {
    // Simulating fetching the username of the logged-in user
    const username = "aniketgupta2312"; // Replace this with actual username fetching logic

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>User Profile</h2>
            <div style={styles.card}>
                <div style={styles.info}>
                    <h3 style={styles.label}>Username:</h3>
                    <p style={styles.value}>{username}</p>
                </div>
                <div style={styles.info}>
                    <h3 style={styles.label}>Email:</h3>
                    <p style={styles.value}>Aniiigupta23@gmail.com</p> {/* Replace with actual email fetching logic */}
                </div>
                {/* Add more user information as needed */}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f0f4f8',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        margin: '20px',
        maxWidth: '600px',
        width: '100%',
    },
    heading: {
        color: '#333',
        marginBottom: '20px',
        fontSize: '28px',
        textAlign: 'center',
    },
    card: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        },
    },
    info: {
        marginBottom: '15px',
    },
    label: {
        fontWeight: 'bold',
        color: '#555',
        fontSize: '16px',
    },
    value: {
        color: '#333',
        fontSize: '18px',
        margin: '5px 0',
        backgroundColor: '#f9f9f9',
        padding: '10px',
        borderRadius: '8px',
    },
};

export default Profile;
