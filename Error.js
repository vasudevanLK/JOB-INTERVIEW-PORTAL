// NotFound.js

import React from 'react';
import './error.css'; // Import the CSS file

const NotFound = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-heading">404 Not Found</h1>
        <p className="error-message">Sorry, the page you are looking for does not exist.</p>
        <p>
          <a href="/" className="error-link">Go back to the homepage</a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
