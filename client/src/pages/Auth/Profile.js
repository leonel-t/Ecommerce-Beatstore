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
        return window.open("http://localhost:3001/logout")
      }
      const handleClick2 = (e) =>{
        e.preventDefault()
        history.push("/login")
      }

      const handleClick3 = (e) =>{
        e.preventDefault()
        history.push("/catalog")
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
                <div className="profile">
                  <div className="contentProfile">
                  <div className="contentData">
                    <p className="titule">User: {"  "} {STORE_USER.user.data.user.name}</p>
                    <p className="titule">Email: {"  "} {STORE_USER.user.data.user.email}</p>
                   </div>
                   <button onClick={handleClick}>Logout</button>
                   <button onClick={handleClick3}>Start to buy</button>
                </div>
                </div>
              ):(
                <div className="profile">
                    <div className="contentProfile">
                        <div className="contentData">
                          <p className="titule">User Not Found </p>
                        </div>
                        <button onClick={handleClick2}>Go to login</button>                
                    </div>
                  </div>
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