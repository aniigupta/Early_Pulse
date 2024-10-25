import React, { useState, useEffect } from 'react';

const UserRequests = () => {
  const [requests, setRequests] = useState([]);  // To store user requests
  const [loading, setLoading] = useState(true);  // To manage loading state
  const [error, setError] = useState(null);  // To manage error state

  // Fetch user requests from the API
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Replace with actual API for new requests
        if (!response.ok) {
          throw new Error('Failed to fetch user requests');
        }
        const data = await response.json();
        setRequests(data); // Assuming this API returns an array of requests
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleApprove = (id) => {
    // Implement approve functionality, call API or update state
    alert(`User request ${id} approved`);
    setRequests(requests.filter((request) => request.id !== id));  // Remove the approved request from the list
  };

  const handleReject = (id) => {
    // Implement reject functionality, call API or update state
    alert(`User request ${id} rejected`);
    setRequests(requests.filter((request) => request.id !== id));  // Remove the rejected request from the list
  };

  if (loading) {
    return <p>Loading user requests...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>New User Requests</h1>
      <p>Here you can approve or reject new user requests.</p>
      <div style={styles.cardList}>
        {requests.length > 0 ? (
          requests.map((request) => (
            <div key={request.id} style={styles.card}>
              <h3>{request.name}</h3>
              <p>Email: {request.email}</p>
              <p>Phone: {request.phone}</p>
              <div style={styles.buttonContainer}>
                <button onClick={() => handleApprove(request.id)} style={styles.approveButton}>
                  Approve
                </button>
                <button onClick={() => handleReject(request.id)} style={styles.rejectButton}>
                  Reject
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No new user requests available.</p>
        )}
      </div>
    </div>
  );
};

// Basic styles for the cards and buttons
const styles = {
  cardList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  card: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  approveButton: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  rejectButton: {
    padding: '10px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default UserRequests;
