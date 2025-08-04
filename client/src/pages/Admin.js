import React, { useEffect, useState } from 'react';

function Admin() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/applicants')
      .then(res => res.json())
      .then(data => setApplicants(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Applicants</h2>
      <ul>
        {applicants.map((a, i) => (
          <li key={i}>
            <strong>{a.name}</strong> ({a.role}) - {a.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
