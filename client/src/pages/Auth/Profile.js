import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchUser} from '../../stores/user/user.actions'
import './Profile.css'

const Profile = ({fetchUserEffect, STORE_USER}) =>{

    useEffect(() => {
        fetchUserEffect();
      }, [fetchUserEffect]);

    return (
        <div>
            {STORE_USER.user && STORE_USER.user.data
              ?(
                <h1>Profile: {"  "} {STORE_USER.user.data.user.name}</h1>
              ):(
                <h1>User Not Found</h1>
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