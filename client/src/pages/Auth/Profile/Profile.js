import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../../stores/user/user.actions'
import { useHistory } from 'react-router-dom'

// import jwt from 'jsonwebtoken'

import axios from 'axios';
import ProfileCard from '../../../components/Profile/ProfileCard/ProfileCard';
import TabUser from '../../../components/Profile/TabUser/TabUser';

//Internationalization
import { withTranslation } from 'react-i18next';

import './Profile.css'

const Profile = ({t, fetchUserEffect, STORE_USER }) => {

  const history = useHistory();

  // var token= localStorage.getItem('token')
  //   if(token){
  //     var decoded = jwt.verify(token,'$2y$12$GeqnBZJiqMrX9ZN04N9KRe8XzNKLLiuUJ5oC1BYYE3WjRnRoB/HFW');
  //   }
  //   console.log(decoded)

  useEffect(() => {
    fetchUserEffect();
  }, [fetchUserEffect]);


  const handleClick2 = (e) => {
    e.preventDefault()
    localStorage.clear()
    history.push("/login")
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
      localStorage.setItem("token", newTokens.data.newToken)
      localStorage.setItem("refreshToken", newTokens.data.newRefreshToken)
      history.push("/")
    }).catch((error) => {
      console.log(error)
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
                <>
                <div className="--Profile">
                  
                  <ProfileCard name={STORE_USER.user.data.user.name} email={STORE_USER.user.data.user.email}/>
                  <TabUser/>
                </div>
                </>
              ) : (
                <>
                  {generateNewToken()}
                  <div className="profile">
                    <div className="contentProfile">
                      <div className="contentData">
                        <p className="titule">{t('page.profile.title')}</p>
                      </div>
                      <button onClick={handleClick2}>{t('page.profile.button')}</button>
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


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Profile));