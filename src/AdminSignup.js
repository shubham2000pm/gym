import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addAdminSignupData } from './SignupService'; // Import the service
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';

const AdminSignup = () => {
  const [adminName, setAdminName] = useState('');
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    // Add your signup logic here
    if (!adminName || !adminId || !password || !phone) {
      toast.error('Please fill out all the fields.');
      return;
    }
    const adminData = {
        adminName,
        adminId,
        password,
        phone,
      };

      const response= await fetch('http://localhost:8000/admin/signup',{
        method:'POST',
        body:JSON.stringify(adminData),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const data = await response.json();
    console.log(data);
    toast.success('Admin signed up successfully!', { autoClose: 3000, ProgressBar: true });

    // Store admin signup data
    addAdminSignupData(adminData);

    console.log('Admin signed up!', adminData);
    // Perform other actions if needed
    // Clear form fields
    setAdminName('');
    setAdminId('');
    setPassword('');
    setPhone('');
    
  };


  return (
    <div className="signup-container">
      <h1>Admin Signup</h1>
      <input
        type="text"
        placeholder="Admin Name"
        value={adminName}
        onChange={(e) => setAdminName(e.target.value)}
        required=""
      />
      <input
        type="text"
        placeholder="Admin ID"
        value={adminId}
        onChange={(e) => setAdminId(e.target.value)}
        required=""
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required=""
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required=""
      />
      <button onClick={handleSignup}>Sign Up</button>
      <Link to="/admin/login" className="login-link">Already have an account? Log in</Link>
      <ToastContainer />
    </div>
  );
};

export default AdminSignup;
