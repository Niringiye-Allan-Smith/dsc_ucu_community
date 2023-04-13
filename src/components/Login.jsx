import React, {  useState } from 'react'

import './Login.css'
import Navbar from './Navbar';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Form validation using regular expressions
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (!emailRegex.test(email)) {
            setError('Enter a valid email address. ');
            return;
        }

        if (!passwordRegex.test(password)) {
            setError('Password must be at least 6 characters long and contain at least one letter and one number.');
            return;
        }

        // Check if user exists in local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((u) => u.email === email && u.password === password);

        if (user) {
            // User is authenticated, redirect to home page
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = '/Dashboard';
        } else {
            // Authentication failed
            setError('Invalid email or password. Make sure it is correct');
        }
    };
    return (
<><Navbar/>
        <div className='container' style={{backgroundImage:"url('https://images.unsplash.com/photo-1512149673953-1e251807ec7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')", backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}>
             
            <h2 className='login-text'>Log In Here</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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

            <p>Not a member? <a href="/Register">Register Here</a></p>
        </div>
 </>   )
}

export default Login
