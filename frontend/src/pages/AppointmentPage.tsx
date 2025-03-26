import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentPage: React.FC = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/appointments', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAppointments(response.data);
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment._id}>
            {appointment.date} - {appointment.time} with {appointment.doctorId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentPage;