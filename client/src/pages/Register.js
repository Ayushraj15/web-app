import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', role: '', skills: '', reason: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/applicants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    alert('Application submitted!');
    setFormData({ name: '', email: '', phone: '', role: '', skills: '', reason: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h2>Register</h2>
      {['name', 'email', 'phone', 'skills', 'reason'].map(field => (
        <input key={field} name={field} placeholder={field} value={formData[field]} onChange={handleChange} required style={{ display: 'block', margin: '10px 0' }} />
      ))}
      <select name="role" value={formData.role} onChange={handleChange} required>
        <option value="">Select Role</option>
        <option value="Intern">Intern</option>
        <option value="Volunteer">Volunteer</option>
      </select>
      <button type="submit" style={{ marginTop: 10 }}>Submit</button>
    </form>
  );
}

export default Register;
