import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { useUser } from './UserContext'; 

const DashboardContainer = styled.div`
  display: flex;
  min-height 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 250px; // Width of sidebar
  background: #f8fafc;
  min-height: 100vh;
`;

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const { user, loading } = useUser(); 

  useEffect(() => {
    setMessage('Welcome to the ADMIN Dashboard!');
  }, []);

  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <h1>{message}</h1>
        {loading ? (
          <p>Loading user data...</p>
        ) : user ? (
          <div>
            <h2>User Details:</h2>
            <pre>{JSON.stringify(user, null, 2)}</pre> {/* Pretty print user details */}
          </div>
        ) : (
          <p>No user data available.</p>
        )}
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
