import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Profile from './Profile';
import UserManagement from './UserManagement';
import Login from './Login';

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 250px; // Width of sidebar
  background: #f8fafc;
  min-height: 100vh;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/user-management" element={<UserManagement />} />
          {/* Add other routes as needed */}
        </Routes>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;