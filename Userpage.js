import React, { useState } from 'react';
import './UserPage.css';

const Dashboard = () => {
  const [userProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  });

  const [appliedJobs] = useState([
    { id: 1, title: "Software Engineer", status: "Pending", progress: 30 },
    { id: 2, title: "Frontend Developer", status: "In Progress", progress: 60 },
    { id: 3, title: "Backend Developer", status: "Approved", progress: 100 },
  ]);

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const handleNotificationChange = (type) => {
    setNotifications(prevState => ({
      ...prevState,
      [type]: !prevState[type]
    }));
  };

  return (
    <div className="dashboard-container">
      <div className="left-side">
        <section className="profile-details section-container">
          <h2>Profile Details</h2>
          <div className="profile-card">
            <p><strong>Name:</strong> {userProfile.name}</p>
            <p><strong>Email:</strong> {userProfile.email}</p>
            <p><strong>Phone:</strong> {userProfile.phone}</p>
          </div>
        </section>

        <section className="notification-settings section-container">
          <h2>Notification Settings</h2>
          <div className="settings-card">
            <div className="notification-option">
              <input
                type="checkbox"
                id="email"
                checked={notifications.email}
                onChange={() => handleNotificationChange('email')}
              />
              <label htmlFor="email">Email Notifications</label>
            </div>
            <div className="notification-option">
              <input
                type="checkbox"
                id="sms"
                checked={notifications.sms}
                onChange={() => handleNotificationChange('sms')}
              />
              <label htmlFor="sms">SMS Notifications</label>
            </div>
            <div className="notification-option">
              <input
                type="checkbox"
                id="push"
                checked={notifications.push}
                onChange={() => handleNotificationChange('push')}
              />
              <label htmlFor="push">Push Notifications</label>
            </div>
          </div>
        </section>
      </div>

      <div className="middle">
        <section className="applied-jobs section-container">
          <h2>Applied Jobs</h2>
          <button style={{
    backgroundColor: "green",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "10px 0",
}}>
   <a href='/job' style={{color:"white"}}>Apply Job</a>  
</button>

          <div className="applied-jobs-list">
   
            {appliedJobs.map(job => (
              <div className="job-card" key={job.id}>
                <div className="job-info">
                  <h3>{job.title}</h3>
                  <p>Status: <span className={`status ${job.status.toLowerCase().replace(' ', '-')}`}>{job.status}</span></p>
                  {job.status === "In Progress" && (
                    <div className="progress-bar">
                      <div className="progress" style={{ width: `${job.progress}%` }}></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
    
        </section>

        <section className="task-schedule section-container">
          <h2>Task Schedule</h2>
          <div className="task-list">
            <div className="task-item">
              <input
                type="text"
                placeholder="Enter task title"
                className="task-input"
              />
              <p>Complete leetcode</p>
              <p>Interview 12/09/24</p>
              <p>Finish DSA!</p>
              <button className="apply-button">Include</button>
            </div>
          </div>
        </section>
      </div>

      <div className="right-side">
        <section className="trending-companies section-container">
          <h2>Trending Job Applying Companies</h2>
          <div className="company-list">
          <div className="company-item">
    <h3>Zoho</h3>
    <p>Number of applications: 123</p>
    <p>Industry: Technology</p>
    <a href='/jobform' style={{color:"green",}}>Apply</a>
    <h3>Wipro</h3> 
    <p>Number of applications: 10</p>
    <p>Industry: Developer</p>
    <a href='/jobform' style={{color:"green",}}>Apply</a>
    <h3>HCL</h3>
    <p>Number of applications: 5</p>
    <p>Industry: Manager</p>
    <a href='/jobform' style={{color:"grey", backgroundColor:"lightgreen" }}>Apply</a>
  </div>




            {/* Trending Companies content */}
          </div>
        </section>

        <section className="company-vacancies section-container">
          <h2>Vacancy Openings at Companies</h2>
          <div className="vacancy-list">
          <div className="vacancy-item">
              <h3>UI/UX</h3>
          <p>Company: Google</p>
          <p>Location: US, Newyork</p>
          <p>Posted Date: 2024-06-18</p>
          <button className="apply-button"><a href='/jobform'>Apply</a></button>
 </div>



            
            {/* Company Vacancies content */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;

























/* <h2>Trending Job Applying Companies</h2>
<div className="company-list">
  <div className="company-item">
    <h3>Zoho</h3>
    <p>Number of applications: 123</p>
    <p>Industry: Technology</p>
    <a href='/jobform' style={{color:"green",}}>Apply</a>
    <h3>Wipro</h3> 
    <p>Number of applications: 10</p>
    <p>Industry: Developer</p>
    <a href='/jobform' style={{color:"green",}}>Apply</a>
    <h3>HCL</h3>
    <p>Number of applications: 5</p>
    <p>Industry: Manager</p>
    <a href='/jobform' style={{color:"green",}}>Apply</a>
  </div> */



//   <div className="vacancy-item">
//   <h3>Job Title</h3>
//   <p>Company: Company Name</p>
//   <p>Location: City, Country</p>
//   <p>Posted Date: 2024-06-18</p>
//   <button className="apply-button">Apply</button>
// </div>
// {/* Add more vacancy items as needed */}
// </div>