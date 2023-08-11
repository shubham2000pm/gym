import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [adminName, setAdminName] = useState('');
  const [adminId, setAdminId] = useState('');

  useEffect(() => {
    // Fetch admin data from the backend
    const fetchAdminData = async () => {
      try {
        const response = await fetch('http://localhost:8000/admin/signup'); // Change the URL to your API endpoint
        const data = await response.json();
        setAdminName(data.adminName);
        setAdminId(data.adminId);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    fetchAdminData();
  }, []);

  return (
    <div>
      <h1>Welcome to the Admin Dashboard</h1>
      <div>
        <p>Admin Name: {adminName}</p>
        <p>Admin ID: {adminId}</p>
      </div>
      <Link to="/admin/login">Logout</Link>
    </div>
  );
};

export default AdminDashboard;
