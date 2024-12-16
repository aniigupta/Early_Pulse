import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserRequests from './pages/UserRequests';
import UserManagement from './pages/UserManagement';
import Login from './pages/Login';
import Sidebar from './pages/Sidebar';
import Profile from './pages/Profile';
import styled from 'styled-components';
import Dashboard from './pages/Dashboard';
import Labs from './pages/Labs';


const DashboardLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 250px; // Same as sidebar width
  background: #f8fafc;
  min-height: 100vh;
`;


const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <DashboardLayout>
      <Sidebar />
      <MainContent>
        {children}
      </MainContent>
    </DashboardLayout>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />

        <Route path="/user-requests" element={
          <ProtectedRoute>
            <UserRequests />
          </ProtectedRoute>
        } />

        <Route path="/user-management" element={
          <ProtectedRoute>
            <UserManagement />
          </ProtectedRoute>
        }
        />
        <Route path="/labs" element={
          <ProtectedRoute>
            <Labs />
          </ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;