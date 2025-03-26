import React, { useState } from 'react';
import axios from 'axios';

const DDICheckerPage: React.FC = () => {
  const [drugs, setDrugs] = useState('');
  const [interactions, setInteractions] = useState([]);

  const checkInteractions = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.post('/ddi-checker/check', { drugs: drugs.split(',') }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setInteractions(response.data);
  };

  return (
    <div>
      <h2>Drug Interaction Checker</h2>
      <input type="text" placeholder="Enter drugs separated by commas" value={drugs} onChange={(e) => setDrugs(e.target.value)} />
      <button onClick={checkInteractions}>Check</button>
      <ul>
        {interactions.map((interaction, index) => (
          <li key={index}>{interaction}</li>
        ))}
      </ul>
    </div>
  );
};

export default DDICheckerPage;