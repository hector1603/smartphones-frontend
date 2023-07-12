import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/api/login', { email, password });
      
      if (response.status === 200) {
        window.location.href = '/smartphones';
      }
    } catch (error) {
      setError('Credenciales inválidas. Por favor, inténtalo nuevamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
      </div>
      <div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Iniciar sesión</button>
      </div>
    </form>
  );
};

export default LoginForm;
