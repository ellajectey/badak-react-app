import React from 'react';
import Sidebar from '../components/sidebar.jsx';
import Container from '../components/container.jsx';
import Navbar from '../components/navbar.jsx';

function SpPortal() {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <Container/>
        </div>
    );
}

export default SpPortal;