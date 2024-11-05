import React, { useState, useEffect } from 'react';

const UserRequests = () => {
  const [requests, setRequests] = useState([]); 
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch user requests');
        }
        const data = await response.json();
        setRequests(data); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleApprove = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
  };

  const handleReject = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p>Loading user requests...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.errorContainer}>
        <div style={styles.errorIcon}>!</div>
        <p style={styles.errorText}>Error: {error}</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>New User Requests</h1>
        <p style={styles.subtitle}>Review and manage incoming user registration requests</p>
      </div>

      {requests.length === 0 ? (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>👥</div>
          <p style={styles.emptyText}>No pending user requests</p>
        </div>
      ) : (
        <div style={styles.cardGrid}>
          {requests.map((request) => (
            <div key={request.id} style={styles.card}>
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>{request.name}</h3>
              </div>
              <div style={styles.cardContent}>
                <div style={styles.infoRow}>
                  <span style={styles.label}>📧 Email:</span>
                  <span style={styles.value}>{request.email}</span>
                </div>
                <div style={styles.infoRow}>
                  <span style={styles.label}>📞 Phone:</span>
                  <span style={styles.value}>{request.phone}</span>
                </div>
                <div style={styles.buttonContainer}>
                  <button 
                    onClick={() => handleApprove(request.id)} 
                    style={styles.approveButton}
                  >
                    ✓ Approve
                  </button>
                  <button 
                    onClick={() => handleReject(request.id)} 
                    style={styles.rejectButton}
                  >
                    ✕ Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '32px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    marginBottom: '32px',
  },
  title: {
    fontSize: '32px',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    margin: 0,
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    overflow: 'hidden',
  },
  cardHeader: {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #eee',
  },
  cardTitle: {
    margin: 0,
    fontSize: '18px',
    fontWeight: '600',
    color: '#2c3e50',
  },
  cardContent: {
    padding: '20px',
  },
  infoRow: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '16px',
  },
  label: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '4px',
  },
  value: {
    fontSize: '15px',
    color: '#2c3e50',
  },
  buttonContainer: {
    display: 'flex',
    gap: '12px',
    marginTop: '20px',
  },
  approveButton: {
    flex: 1,
    padding: '10px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#34c759',
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  rejectButton: {
    flex: 1,
    padding: '10px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#ff3b30',
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '400px',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  errorContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '400px',
  },
  errorIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#ff3b30',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    marginBottom: '16px',
  },
  errorText: {
    color: '#ff3b30',
    fontSize: '18px',
    textAlign: 'center',
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '300px',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    padding: '32px',
  },
  emptyIcon: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  emptyText: {
    fontSize: '18px',
    color: '#666',
    margin: 0,
  },
};

// Add keyframes for spinner animation
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);

export default UserRequests;