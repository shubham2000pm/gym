import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import UserSignup from './UserSignup';
import AdminSignup from './AdminSignup';

import './App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
      <div className="pattern-container">
          <h1>Welcome to the Gym Portal</h1>
          <p>Please select login options below</p>
        </div>
        <div className="button-container">
          
          <Link to="/user/login" className="button">
            User Login
          </Link>
          <Link to="/admin/login" className="button">
            Admin Login
          </Link>
        </div>
        
        <Routes>
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/user/signup" element={<UserSignup />} /> 
          <Route path="/admin/signup" element={<AdminSignup />} /> 
          <Route path="/admin/login" element={<AdminLogin />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
