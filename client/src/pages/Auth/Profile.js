import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchUser} from '../../stores/user/user.actions'
import {useHistory} from 'react-router-dom'
import Spiner from '../../assets/images/Spinner.svg';
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
        <>
        {STORE_USER.userLoading
          ?(
            <div className="loadding-div">
                <div className="loader"></div>
            </div>
          ):(
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
        </>

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