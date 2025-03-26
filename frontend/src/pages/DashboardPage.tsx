import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/appointments">Manage Appointments</Link>
      <br />
      <Link to="/ddi-checker">Check Drug Interactions</Link>
    </div>
  );
};

export default DashboardPage;