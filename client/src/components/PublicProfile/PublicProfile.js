import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserById} from '../../stores/user/user.actions';
import {serverUrl} from '../../auxiliar/variables';
import './publicProfile.scss';

const PublicProfile = (userId) => {
 const user = useSelector(state => state.userReducers.userPublic)
  
 const dispatch = useDispatch();
 useEffect(() => {
     dispatch(getUserById("kn4wmxm0"))
 }, [])
 console.log("ESTO ES USER",user)

 return (
    <div className="userMain">
        <h1>{user.name}</h1>
        <div>
            <img alt="profileImage" src={`${serverUrl}/images/${user.image}`}/>
        </div>
    </div>
)

}

export default PublicProfile;