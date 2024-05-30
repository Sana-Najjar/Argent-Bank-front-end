import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userProfile } from '../../redux/actions/user.actions.jsx';
import User from '../../components/User/User.jsx';
import Account from '../../components/Account/Account.jsx';
import AccountCardData from '../../data/AccountCardData.json';
import './Profile.scss';
/* User profile page */
export function Profile () {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    /* Asynchronous function that retrieves user data and updates it with useEffect */
    useEffect(() => {
        if (token) {
            const userData = async () => {
                try {
                    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        const userData = {
                            createdAt: data.body.createdAt,
                            updatedAt: data.body.updatedAt,
                            id: data.body.id,
                            email: data.body.email,
                            firstname: data.body.firstName,
                            lastname: data.body.lastName,
                            username: data.body.userName
                        }
                        /* Return user data in redux state */
                        dispatch(userProfile(userData));
                    } else {
                        console.log("error while retrieving profile");
                    }
                } catch (error) {
                    console.error(error);
                };
            };
            userData();
        }
    }, [dispatch, token]);

    return (
        <div className={`profile-page ${isEditing ? 'editing' : ''}`}>
            <main className='bg-dark'>
                <User isEditing={isEditing} setIsEditing={setIsEditing} />
                {AccountCardData.map((data) => (
                    <Account
                        key={data.id}
                        title={data.title}
                        amount={data.amount}
                        description={data.description}
                        isEditing={isEditing}
                    />
                ))}
            </main>
        </div>
    );
}

export default Profile;
