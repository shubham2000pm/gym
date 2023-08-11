import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addUserSignupData } from './SignupService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';


const UserSignup = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !username || !password || !phone || !address) {
      toast.error('Please fill out all the fields.');
      return;
    }

    const userData ={

      name,
      username,
      password,
      phone,
      address,
  };
    const response= await fetch('http://localhost:5000/user/signup',{
        method:'POST',
        body:JSON.stringify(userData),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const data = await response.json();
    console.log(data);
    // Add your signup logic here

     // Show a success notification popup
     toast.success('User signed up successfully!', { autoClose: 3000, ProgressBar: true });
    // Store user signup data
    addUserSignupData(userData);

    console.log('User signed up!', userData);

    // Clear form fields
    setName('');
    setUsername('');
    setPassword('');
    setPhone('');
    setAddress('');
  
    // You can perform actions like sending data to a server, updating state, etc.
  };



  
  return (
    
    <div className="signup-container">
       
      <h1>User Signup</h1>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required=""
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required=""
      />
      <button onClick={handleSignup}>Sign Up</button>
      <Link to="/user/login" className="login-link">Already have an account? Log in</Link>
        
        <ToastContainer /> {/* This is where the toasts will be displayed */}
    </div>
  );
};

export default UserSignup;
