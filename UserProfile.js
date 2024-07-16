import React from 'react';
import UserDetails from './UserDetails';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    dateOfBirth: 'January 1, 1990',
    gender: 'Male',
    occupation: 'Software Engineer'
    // Add more details as needed
  };

  return (
    <div>
      <UserDetails user={user} />
      {/* Other components or sections */}
    </div>
  );
};

export default UserProfile;
