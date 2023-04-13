import React from 'react'
import './Homepage.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'



function Homepage() {
    return (
        <div className='homepage-container'>
            <Navbar />
            <h1>DSC UCU Community - Home page</h1>
            <p className='hompage-desc'>
            The DSC UCU Community is a vibrant group of university and college students who are passionate about learning Google technologies and developer tools. 
            The DSC UCU community is open to any student, regardless of their academic background or major, and is organized and supported by Google Developers.
            </p>
            <p className='hompage-desc'>
            The primary goal of the DSC community at UCU is to help students become better developers by providing them with opportunities to learn from experienced developers, collaborate with other students, and build real-world projects using Google's technologies. 
            The community offers a variety of activities, including workshops, study jams, speaker sessions, hackathons, and hands-on projects.
            </p>

            <button>
                <Link to='/Register'>Register</Link>
            </button>

            <button>
                <Link to='/Login'>Log In</Link>
            </button>
            {/* <div className='back-image'>
                <img src={img}/>
            </div> */}
        </div>
    )
}

export default Homepage
