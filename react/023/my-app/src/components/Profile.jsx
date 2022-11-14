import React from 'react';


const Profile = (email, img) => {
    return <div>
        <p>{email}</p>
        <img src={img} alt="" />
    </div>;
}

export default Profile;