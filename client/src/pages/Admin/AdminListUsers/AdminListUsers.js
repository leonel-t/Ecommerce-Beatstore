import React,{useEffect} from "react";
import {connect} from 'react-redux';
import {fetchAllUsers} from '../../../stores/admin/admin.actions';
import UserCard from './UserCard.js' 

import "./adminListUser.css";

const Admin = ({fetchAllUsersEffect,GET_ALL_USERS}) => {
  
    useEffect(()=>{
        fetchAllUsersEffect()
      },[fetchAllUsersEffect]);
      
  
  return (
    <>
    <main className="--adminListUsers--main-panel">
      <div className="--adminListUsers--main-div">        
        {GET_ALL_USERS && GET_ALL_USERS.length > 0
            ?(
                <>
                {GET_ALL_USERS.map((user, index)=>{
                    return (
                        <UserCard key={index} user={user}></UserCard>
                    )
                })}
                </>
            ):(
                <h2>No Users</h2>
            )
        }
      </div>
        
    </main>
    </>
  );
};

const mapStateToProps = state => {
  return {
    GET_ALL_USERS: state.adminReducers.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsersEffect: () => dispatch(fetchAllUsers()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Admin);