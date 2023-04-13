import React from 'react';
import { Link } from 'react-router-dom';
import './Confirm.css';
import Navbar from './Navbar'

function Confirm() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  return (
    
    <div className='confirm-container'>
      
      <h1>Registration Complete!</h1>
      <h3>Congratulations {currentUser?.name}, you have successfully been registered as a {currentUser?.role}.</h3>
      <p>Click the button below to go to the dashboard.</p>
      <Link to="/dashboard">
        <button>Go to Dashboard</button>
      </Link>
    </div>
  );
}

export default Confirm;