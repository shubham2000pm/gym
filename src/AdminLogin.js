import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { isAdminRegistered } from './server/AdminService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
import './Login.css';

const AdminLogin = ({ onLogin }) => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = async () => {

    if (!adminId || !password) {
      toast.error('Please fill out all the fields.');
      return;
    }
    // Perform admin authentication logic here (send credentials to backend)
    //const isRegistered = await isAdminRegistered(adminId, password);

    const response = await fetch('http://localhost:8000/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        adminId: adminId,
        password: password,
      }),
    });

    setAdminId('');
  setPassword('');

    
    if (response.ok) {
      const data = await response.json();
      console.log(data.message); // Optional: Log the server response message
      // Call the onLogin prop function to indicate successful login
      //onLogin();
      // Redirect to admin dashboard
      navigate('/admin/dashboard');
    } else {
      console.log('Invalid credentials');
      toast.error('Invalid credentials', { position: toast.POSITION.TOP_CENTER });
    }
  };

  return (
    <div className="login-container">
      <h1>Admin Login</h1>
      <input
        type="text"
        placeholder="Admin ID"
        value={adminId}
        onChange={(e) => setAdminId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAdminLogin}>Login as Admin</button>
      <Link to="/admin/signup" className="signup-link">
        Sign Up
      </Link>
      <ToastContainer /> 
    </div>
  );
};

export default AdminLogin;
