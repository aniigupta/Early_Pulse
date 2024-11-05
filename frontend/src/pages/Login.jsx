import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
`;

const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #1a237e;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 1px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  padding-left: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid ${props => props.focused ? '#4c669f' : '#e1e1e1'};
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;

  &:focus {
    border-color: #4c669f;
    box-shadow: 0 0 0 3px rgba(76, 102, 159, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #4c669f 0%, #3b5998 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(76, 102, 159, 0.4);
  }

  &:disabled {
    background: #9ca3af;
    transform: none;
    cursor: not-allowed;
  }
`;

const ToggleText = styled.p`
  color: #4c669f;
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #3b5998;
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.div`
  color: #dc2626;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  text-align: center;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [focusedInput, setFocusedInput] = useState('');
  const navigate = useNavigate();

  // In your Login.jsx file
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  setTimeout(() => {
    if (username === 'admin' && password === 'admin') {
      // Set authentication state
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
    setLoading(false);
  }, 1000);
};

// Add logout functionality to your Sidebar component:
const handleLogout = () => {
  localStorage.removeItem('isAuthenticated');
  navigate('/');
};

  return (
    <Container>
      <FormWrapper>
        <FormContainer>
          <Logo>
            {isSignup ? 'Create Account' : 'Welcome Back'}
          </Logo>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setFocusedInput('username')}
                onBlur={() => setFocusedInput('')}
                focused={focusedInput === 'username'}
              />
            </InputGroup>
            <InputGroup>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedInput('password')}
                onBlur={() => setFocusedInput('')}
                focused={focusedInput === 'password'}
              />
            </InputGroup>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button type="submit" disabled={loading}>
              {loading ? 'Please wait...' : isSignup ? 'Create Account' : 'Sign In'}
            </Button>
          </Form>
          <ToggleText onClick={() => {
            setIsSignup(!isSignup);
            setError('');
          }}>
            {isSignup ? 'Already have an account? Sign in' : 'Need an account? Create one'}
          </ToggleText>
        </FormContainer>
      </FormWrapper>
    </Container>
  );
};

export default Login;