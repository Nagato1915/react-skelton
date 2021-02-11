import React, {useState, useEffect} from 'react';
import SkeltonProfile from '../skeltons/SkeltonProfile';

const User = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        setTimeout( async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await res.json();
            setProfile(data);
        }, 3000)
    });

    return(
        <div className="user">
            <h2>User Details</h2>
            {profile && (
                <div className="profile">
                <h3>{ profile.username }</h3>
                <p>{ profile.email }</p>
                <a href={ profile.website }>{ profile.website }</a>
                </div>
            )}

            {!profile && <SkeltonProfile theme='dark' />}
        </div>

    )
}

export default User;