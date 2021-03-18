import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchUser} from '../../stores/user/user.actions'
import {useHistory} from 'react-router-dom'

import './Profile.css'

const Profile = ({fetchUserEffect, STORE_USER}) =>{

  const history = useHistory();

    useEffect(() => {
        fetchUserEffect();
      }, [fetchUserEffect]);

      const handleClick = (e) =>{
        e.preventDefault()
        localStorage.clear()
       return history.push("/login")
      }
      const handleClick2 = (e) =>{
        e.preventDefault()
        history.push("/login")
      }


    return (
        <div>
            {STORE_USER.user && STORE_USER.user.data
              ?(
                <div>
                   <h1 className="titule">Profile: {"  "} {STORE_USER.user.data.user.name}</h1>
                   <button onClick={handleClick}>Logout</button>
                </div>
              ):(
                <h1>User Not Found </h1>,
                <button onClick={handleClick2}>Go to login</button>
              )  
            }
            
        </div>

    )
}

const mapStateToProps =  state => {
    return {
      STORE_USER : state.userReducers
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchUserEffect: () => dispatch(fetchUser()),
    };
  };
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Profile);