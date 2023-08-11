import React from 'react';
import './Dashboard.css'; // Make sure to import the corresponding CSS file

const DashboardComponent = () => {
  // Sample user data
  const userData = {
    name: 'John Doe',
    dateOfJoining: '2023-08-01',
    planSelected: 'Premium Plan',
    trainerAssigned: true,
    trainerName: 'Emily Smith',
  };

  return (
    <div className="dashboard-container">
      <h1>Gym User Dashboard</h1>
      <div className="user-details">
        <div className="detail">
          <strong>Name:</strong> {userData.name}
        </div>
        <div className="detail">
          <strong>Date of Joining:</strong> {userData.dateOfJoining}
        </div>
        <div className="detail">
          <strong>Plan Selected:</strong> {userData.planSelected}
        </div>
        <div className="detail">
          <strong>Trainer Assigned:</strong> {userData.trainerAssigned ? 'Yes' : 'No'}
        </div>
        {userData.trainerAssigned && (
          <div className="detail">
            <strong>Trainer Name:</strong> {userData.trainerName}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardComponent;
