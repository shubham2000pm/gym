import React, { useEffect, useState } from 'react';
import './UserDashboard.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to manage navigation

const UserDashboard = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

// Check if the user is signed in
const isSignedIn = Object.keys(userData).length > 0;


  useEffect(() => {
    fetch('http://localhost:5000/api/user')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
 // Add a listener to detect when the user navigates back
 window.onpopstate = () => {
  // Redirect to relogin
  window.location.replace('/user/login');
};
}, []);

  

  
  // Function to handle sign out
  const handleSignOut = () => {
    // Clear user data and any authentication-related data here
    setUserData({});
    // Navigate to the login page
    navigate('/user/login');
    // Modify browser history to replace user dashboard route with relogin route
    window.location.replace('/user/login');
  };

  return (
    <div className="user-dashboard">
      <div className="welcome">
        <h1>Welcome, {userData.name}!</h1>
        <p>Here's Your Profile Information:</p>
        
      </div>
      <div className="user-info">
        <div className="user-box user-name">Name: {userData.name}</div>
        <div className="user-box user-username">User Id: {userData.username}</div>
        <div className="user-box user-phone">Contact No.: {userData.phone}</div>
        <div className="user-box user-address">User Address: {userData.address}</div>
      </div>
      <button className="sign-out-button" onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default UserDashboard;
