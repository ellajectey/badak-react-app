import React from 'react';
import Userdetails from '../components/userdetails';
import Allrequests from '../components/allrequests';

function Profile() {
    return (
        <div>
            <Userdetails/>
            {/* profile resource */}
            {/* https://www.behance.net/gallery/184520011/CRM-User-Page?tracking_source=search_projects|profile+page+ui&l=41 */}
            <Allrequests/>
        </div>
    );
}

export default Profile;