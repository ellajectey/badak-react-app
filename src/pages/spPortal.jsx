import React from 'react';
import Container from '../components/container.jsx';
import '../index.css';
import Navbar from '../components/navbar.jsx';
import Sidebar from '../components/sidebar.jsx';


function SpPortal() {
    return (
        <div>
            <Navbar/>
            <div className="flex w-auto">  
            <Sidebar/><Container/>  
            </div>
            
        </div>
    );
}

export default SpPortal;
