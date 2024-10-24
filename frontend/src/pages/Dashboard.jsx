import React, { useState } from 'react';

const Dashboard = () => {
  // Sample data to simulate new user requests and total users
  const [newUserRequests, setNewUserRequests] = useState(5);  // Placeholder value for pending requests
  const [totalUsers, setTotalUsers] = useState(100);  // Placeholder value for total users

  // Function to handle viewing new user requests
  const handleViewRequests = () => {
    alert(`You have ${newUserRequests} new user requests.`);
    // You can later implement a navigation to a detailed page to approve/reject users
  };

  // Function to handle viewing total users
  const handleViewUsers = () => {
    alert(`There are ${totalUsers} total users.`);
    // You can later implement a navigation to a user management page
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
    },
    card: {
      padding: '20px',
      margin: '10px 0',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '300px',
      textAlign: 'center',
      cursor: 'pointer',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Admin Dashboard</h1>
      <p>Welcome, Admin!</p>

      {/* New User Requests Card */}
      <div style={styles.card} onClick={handleViewRequests}>
        <h2>New User Requests</h2>
        <p>{newUserRequests} pending requests</p>
        <button style={styles.button}>View Requests</button>
      </div>

      {/* Total Users Card */}
      <div style={styles.card} onClick={handleViewUsers}>
        <h2>Total Users</h2>
        <p>{totalUsers} users</p>
        <button style={styles.button}>View Users</button>
      </div>

      {/* Add additional dashboard widgets, charts, and components as needed */}
    </div>
  );
};

export default Dashboard;
