import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
import './Login.css';


const UserLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Perform authentication logic here
    if (!username || !password) {
      toast.error('Please fill out all the fields.');
      return;
    }
    

     const response = await fetch('http://localhost:8000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    setUsername('');
  setPassword('');
    // Redirect using other methods like setting state or using a link/button

    if (response.ok) {
        const data = await response.json();
        console.log(data.message); 

         navigate('/user/dashboard');
    } else {
      console.log('Invalid credentials');
      toast.error('Invalid credentials', { position: toast.POSITION.TOP_CENTER });
    }
  };

    

  return (
    <div className="login-container">
      <h1>User Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <Link to="/user/signup" className="signup-link">Register</Link>
      <ToastContainer /> 
    </div>
  );
};

export default UserLogin;
