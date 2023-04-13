import React, { useState } from 'react';
import Navbar from './Navbar';
import './Register.css'

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Member');
  const [error, setError] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();

    // Form validation using regular expressions
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long and contain at least one letter and one number.');
      return;
    }

    // Store user data in local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = { name, email, password, role };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to confirm page
    window.location.href = '/confirm';
  };

  return (
    <>
    <Navbar/>
    <div className='register-container' style={{backgroundImage:"url('https://th.bing.com/th/id/OIP.qeN76vTVQjtvrk478xnUgwHaEo?pid=ImgDet&rs=1')", backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}>
      
      <h2>Register Here!</h2>
      
      <form onSubmit={handleSignUp}>
      <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Member">Member</option>
            <option value="Club Lead">Club Lead</option>
            <option value="Mentorship Lead">Mentorship Lead</option>
            <option value="Design Lead">Design Lead</option>
            <option value="Outreach Lead">Outreach Lead</option>
            <option value="Technical Lead">Technical Lead</option>
            <option value="Event Coordinator">Event Coordinator</option>
            
          </select>
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      {error && <div>{error}</div>}

      <p>Already a member? <a href='/login'>Log in Here</a> </p>
    </div>
    </>
    
  );
}

export default Register;
