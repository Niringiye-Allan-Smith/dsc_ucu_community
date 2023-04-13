import React, { useState, useEffect } from 'react';
import './Profile.css';
import Navbar from './Navbar'

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Load user data from local storage
    const userData = JSON.parse(localStorage.getItem('currentUser'));
    if (userData) {
      setName(userData.name);
      setEmail(userData.email);
      setRole(userData.role);
      setProfilePic(userData.profilePic);
    } else {
      setError('User data not found.');
    }
  }, []);

  //To logout of the profile
  const handleLogout = () => {
    localStorage.removeItem('userData');
    window.location.href = '/login';
  };

  const handleUpload = (event) => {
    event.preventDefault();

    // Handle profile picture upload
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.toString().split(',')[1];
      setProfilePic(base64String);

      // Update user data in local storage
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      currentUser.profilePic = base64String;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
       <Navbar />
      <h2>Profile Information</h2>
      <div className="profile-container">
        <div className="profile-picture">
          <img src={`data:image/png;base64,${profilePic}`} alt="Profile" />
          <form>
            <label>
              Upload Profile Picture:
              <input type="file" accept="image/png, image/jpeg" onChange={handleUpload} />
            </label>
          </form>
        </div>
        <div className="profile-details">
          <h3>Name: {name}</h3>
          <p>Email: {email}</p>
          <p>Role: {role}</p>
        </div>
      </div>
      {error && <div>{error}</div>}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
