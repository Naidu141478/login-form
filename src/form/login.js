import React, { useState } from 'react';
import './login.scss';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit =  (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }
      
  };

  return (
    <div className="login-form">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="username">Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label className="password">Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && {error}}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;