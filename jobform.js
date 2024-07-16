import React, { useState } from 'react';
import axios from 'axios';
import './jobform.css'; // Import the CSS file
import {useNavigate} from 'react-router-dom'

const JobForm = () => {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    description: '',
    applyDate: '',
    endDate: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const nav=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5500/jobform', formData);
      console.log('New job created:', res.data);
      setFormData({
        company: '',
        role: '',
        description: '',
        applyDate: '',
        endDate: '',
        location: ''
      });
      nav('/admin')
    } catch (err) {
      console.error('Error creating job:', err);
    }
  };

  return (
    <div className="job-form">
      <h2>Add a New Job Listing</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" placeholder="Enter company name" value={formData.company} onChange={handleChange} required />

        <label htmlFor="role">Role</label>
        <input type="text" id="role" name="role" placeholder="Enter role" value={formData.role} onChange={handleChange} required />

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" placeholder="Enter job description" value={formData.description} onChange={handleChange} required></textarea>

        <label htmlFor="applyDate">Apply Date</label>
        <input type="date" id="applyDate" name="applyDate" value={formData.applyDate} onChange={handleChange} required />

        <label htmlFor="endDate">End Date</label>
        <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} required />

        <label htmlFor="location">Location</label>
        <input type="text" id="location" name="location" placeholder="Enter job location" value={formData.location} onChange={handleChange} required />

        <button type="submit">Submit </button>
      </form>
    </div>
  );
};

export default JobForm;
