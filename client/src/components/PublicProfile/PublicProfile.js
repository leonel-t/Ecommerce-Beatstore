import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserById} from '../../stores/user/user.actions';
import {serverUrl} from '../../auxiliar/variables';
import './publicProfile.scss';
import BoxMessage from './BoxMessage';
import HistoryMessages from './Historymessages';
import swal from 'sweetalert';

const PublicProfile = (userId) => {

 
 const userFrom = useSelector(state => state.userReducers.user)
  const idAutor = "kn4wmxm0";
  const date = "2021-04-07";

 const dispatch =  useDispatch();
  useEffect(() => {
     dispatch(getUserById("kn4wmxm0"))
 }, [])
 console.log("ESTO ES FROM",userFrom)
 const user = useSelector(state => state.userReducers.userPublic)
 console.log("ESTO ES USER",user)
 const handleLike =  ()=>{

    swal("Login for send message!");

}


 return (
    <div className="userMain">
        <div className="userName"><h1>{user.name}</h1></div> 
        <div className="imgProfileContainer"> 
            <img alt="profileImage" className="profileImage" src={`${serverUrl}/images/${user.image}`}/>
        </div>
        {userFrom && userFrom.length!== 0 ?(
        <div>
            <div className="userMail">
            <BoxMessage username={user.name} idFrom={userFrom.data.user.id} idTo={user.id}  date={date}/>
        </div>
        <div>
            <HistoryMessages usernameFrom={userFrom.data.user.name} idFrom={userFrom.data.user.id} idTo={user.id} username={user.name}/>
        </div>
        </div>
        ):(
            <div>
                <div className="userMail">
                <span 
                onClick={()=> handleLike()}
                className="material-icons mail">
                mail_outline
                </span>
            </div>
            <div>
            </div>
            </div>
            
        )}
        <div>
            
        </div>
    </div>
)

}

export default PublicProfile;