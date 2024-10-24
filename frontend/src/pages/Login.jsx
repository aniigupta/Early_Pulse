import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login, you can call an API to verify credentials
    if (username === 'admin' && password === 'admin') {
      navigate('/Sidebar');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Mock signup, you can call an API to register the user
    if (username && password) {
      alert('Signup successful! You can now log in.');
      setIsSignup(false); // Switch back to login after signup
    } else {
      alert('Please fill out both fields.');
    }
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    input: {
      margin: '10px 0',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
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
    toggleLink: {
      marginTop: '10px',
      color: '#007bff',
      cursor: 'pointer',
      textDecoration: 'underline',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        {isSignup ? 'Early Pulse Admin Signup' : 'Early Pulse Admin Login'}
      </h2>
      <form onSubmit={isSignup ? handleSignup : handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          {isSignup ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <span style={styles.toggleLink} onClick={toggleForm}>
        {isSignup ? 'Already have an account? Log in' : 'Don\'t have an account? Sign up'}
      </span>
    </div>
  );
};

export default Login;
