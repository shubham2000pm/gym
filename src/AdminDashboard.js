import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [adminData, setAdminData] = useState({});
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/user') // User data endpoint
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));

    fetch('http://localhost:8000/api/admin') // Admin data endpoint
      .then(response => response.json())
      .then(data => setAdminData(data))
      .catch(error => console.error('Error fetching admin data:', error));
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Welcome, Admin!</h1>
      <hr />
      <div className="admin-info">
        <div className="admin-box admin-name">
          Admin Name: {adminData.adminName}
        </div>
        <div className="admin-box admin-id">
          Admin ID: {adminData.adminId}
        </div>
        <div className="admin-box admin-phone">
          Contact No.: {adminData.phone}
        </div>
      </div>
      {/* Display other admin information */}
      <h2>User Data:</h2>
      {/* Display user data fields */}
    </div>
  );
};

export default AdminDashboard;
