import React from 'react';
import Container from '../components/container.jsx';
import '../index.css';
import Navbar from '../components/navbar.jsx';
import Sidebar from '../components/sidebar.jsx';
import IdleTimerContainer from '../components/IdleTimerContainer.js';


function SpPortal() {
    return (
        <div>
            {/* Student and Partner portal page */}
            
            <div className="flex w-auto">  
            <Sidebar/><Container/>  
            </div>
            {/* <IdleTimerContainer></IdleTimerContainer> */}
        </div>
    );
}

export default SpPortal;
