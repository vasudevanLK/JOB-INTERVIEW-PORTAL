import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './JobListingsPage.css'; // Assuming this imports the styles for job-tile and apply-button
import { useNavigate } from 'react-router-dom';
const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:5500/joblist'); // Replace with your backend URL
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const nav=useNavigate()


 const  handleclick = (jobid)=>{
  console.log(`Applying for job with ID: ${jobid}`);
  nav('/form')

 }




  // const handleApply = (jobId) => {
  //   // Implement your apply logic here
  //   console.log(`Applying for job with ID: ${jobId}`);
  //   // Example: Redirect to application page or perform an API call
  // };

  return (
    <div className="job-list">
      <h2>Job Listings</h2>
      {jobs.map(job => (
        <div key={job._id} className="job-tile">
          <h3>{job.role}</h3>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Description:</strong> {job.description}</p>
          <p><strong>Apply Date:</strong> {formatDate(job.applyDate)}</p>
          <p><strong>End Date:</strong> {formatDate(job.endDate)}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <button className="apply-button" onClick={() => handleclick(job._id)}>
  Apply
</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
