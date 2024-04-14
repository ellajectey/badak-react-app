import React from 'react';
import Userdetails from '../components/userdetails';
import Allrequests from '../components/allrequests';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div>
            {/* Profile page */}
            <Navbar/>
            <div className='flex justify-left mx-10 mt-8'>
                <Link to="/"><button><i class="fa-solid fa-arrow-left text-blue-500 px-4"></i>Back</button></Link>
            </div>
            <Userdetails/>
            <br/>
            <Allrequests/>
        </div>
    );
}

export default Profile;