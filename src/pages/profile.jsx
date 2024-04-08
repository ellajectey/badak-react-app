import React from 'react';
import Userdetails from '../components/userdetails';
import Allrequests from '../components/allrequests';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

function Profile() {
    return (
        <div>
            {/* Profile page */}
            <Navbar/>
            <Userdetails/>
            <br/>
            <Allrequests/>
        </div>
    );
}

export default Profile;