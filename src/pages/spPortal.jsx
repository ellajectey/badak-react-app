import React from 'react';
import Container from '../components/container.jsx';
import '../index.css';
import Navbar from '../components/navbar.jsx';
import Sidebar from '../components/sidebar.jsx';


function SpPortal() {
    return (
        <div className='flex'>
            {/* Student and Partner portal page */}
           
            <Sidebar/>
            <Container/>  
           
            
        </div>
    );
}

export default SpPortal;
