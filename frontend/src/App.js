import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserRequests from './pages/UserRequests';
import UserManagement from './pages/UserManagement';
import Login from './pages/Login';
import Sidebar from './pages/Sidebar';
import Profile from './pages/Profile';

function App() {
  return (
  <>
    <Router>
      
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/user-requests" element={<UserRequests />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;