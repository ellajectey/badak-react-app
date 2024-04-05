import React from 'react';
import Userdetails from '../components/userdetails';
import Allrequests from '../components/allrequests';

function Profile() {
    return (
        <div>
            <Userdetails/>
            <Allrequests/>
        </div>
    );
}

export default Profile;