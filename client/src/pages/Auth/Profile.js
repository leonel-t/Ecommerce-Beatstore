import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../stores/user/user.actions'
import { useHistory } from 'react-router-dom'

// import jwt from 'jsonwebtoken'

import './Profile.css'
import axios from 'axios';

const Profile = ({ fetchUserEffect, STORE_USER }) => {

  const history = useHistory();

  // var token= localStorage.getItem('token')

  //   if(token){
  //     var decoded = jwt.verify(token,'$2y$12$GeqnBZJiqMrX9ZN04N9KRe8XzNKLLiuUJ5oC1BYYE3WjRnRoB/HFW');
  //   }


  //   console.log(decoded)

  useEffect(() => {
    fetchUserEffect();
  }, [fetchUserEffect]);

  const handleClick = (e) => {
    e.preventDefault()
    localStorage.clear()
    return window.location.replace("http://localhost:3001/logout")
  }

  const handleClick2 = (e) => {
    e.preventDefault()
    localStorage.clear()
    history.push("/login")
  }

  const handleClick3 = (e) => {
    e.preventDefault()
    history.push("/catalog")
  }

  function generateNewToken() {
    const options = {
      method: 'POST',
      url: 'http://localhost:3001/users/token/',
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem("refreshToken")
      },
      data: {
        useremail: localStorage.getItem("email"),
        refreshToken: localStorage.getItem("refreshToken")
      }
    };

    axios.request(options, {
    }).then(newTokens => {
      console.log("estosss", newTokens)
      localStorage.setItem("token", newTokens.data.newToken)
      localStorage.setItem("refreshToken", newTokens.data.newRefreshToken)
      history.push("/")
    }).catch(() => {
      console.log("ERRORRRRRRRRRRRRRRRRRRRR")
    })
  }
  return (
    <>
      {STORE_USER.userLoading
        ? (
          <div className="loadding-div">
            <div className="loader"></div>
          </div>
        ) : (
          <div>
            {STORE_USER.user && STORE_USER.user.data
              ? (
                <div className="profile">
                  <div className="contentProfile">
                    <div className="contentData">
                      <p className="titule">User: {"  "} {STORE_USER.user.data.user.name}</p>
                      <p className="titule">Email: {"  "} {STORE_USER.user.data.user.email}</p>
                      {/* <label>Image file</label>
                    <input
                      className="buttonInput"
                      type="file"
                      name="image"
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    ></input> */}
                    </div>
                    <button onClick={handleClick}>Logout</button>
                    <button onClick={handleClick3}>Start to buy</button>
                  </div>
                </div>
              ) : (
                <>
                  {generateNewToken()}
                  <div className="profile">
                    <div className="contentProfile">
                      <div className="contentData">
                        <p className="titule">User Not Found </p>
                      </div>
                      <button onClick={handleClick2}>Go to login</button>
                    </div>
                  </div>
                </>
              )
            }

          </div>
        )
      }
    </>

  )
}

const mapStateToProps = state => {
  return {
    STORE_USER: state.userReducers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserEffect: () => dispatch(fetchUser()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);