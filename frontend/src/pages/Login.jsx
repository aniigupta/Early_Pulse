import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 12px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ToggleLink = styled.span`
  margin-top: 15px;
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Mock login, you can call an API to verify credentials
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        navigate('/Sidebar');
      } else {
        alert('Invalid credentials');
      }
      setLoading(false);
    }, 1000);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Mock signup, you can call an API to register the user
    setTimeout(() => {
      if (username && password) {
        alert('Signup successful! You can now log in.');
        setIsSignup(false); // Switch back to login after signup
      } else {
        alert('Please fill out both fields.');
      }
      setLoading(false);
    }, 1000);
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <Container>
      <Heading>{isSignup ? 'Early Pulse Admin Signup' : 'Early Pulse Admin Login'}</Heading>
      <Form onSubmit={isSignup ? handleSignup : handleLogin}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Please wait...' : isSignup ? 'Sign Up' : 'Login'}
        </Button>
      </Form>
      <ToggleLink onClick={toggleForm}>
        {isSignup ? 'Already have an account? Log in' : 'Don\'t have an account? Sign up'}
      </ToggleLink>
    </Container>
  );
};

export default Login;
