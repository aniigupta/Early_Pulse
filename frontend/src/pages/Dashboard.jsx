import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
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

  const [message,setMessage] = useState('');

  useEffect(()=>{
    handleTestApi();
  },[])
  const handleTestApi = async() => {
    try{
      const response = await axios.get(process.env.REACT_APP_BACKEND_URL+"/api/labs/test");
      console.log(response.data);
    }catch(e){
      console.log("Test Api is not working,caught this error : ",e)
    }
  }
  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <h1>{message}</h1>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;