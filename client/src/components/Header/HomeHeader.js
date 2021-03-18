import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchUser} from '../../stores/user/user.actions'
import "./HomeHeader.css"
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';


const HomeHeader = ({fetchUserEffect, STORE_USER}) =>{
  
    useEffect(() => {
        fetchUserEffect();
      }, [fetchUserEffect]);



    return (
      <header className="--newHeader-main" >
          <div className="--newHeader-main-row">
            <div className="--newHeader-main-row-col-logo">
                <Link to="/"><img src={Logo} alt="BeatShop"></img></Link>
            </div>
            <div className="--newHeader-main-row-col-menu">
            <ul className="--newHeader-main-row-col-menu-ul">
                    <li><Link className="--newHeader-main-row-col-menu-link" to="/">Home</Link></li>
                    <li><Link className="--newHeader-main-row-col-menu-link" to="/catalog">Catalog</Link></li>
                    <li><Link className="--newHeader-main-row-col-menu-link" to="/login">Login</Link></li>
                    {STORE_USER.user && STORE_USER.user.data &&STORE_USER.user.data.user.rol === "admin"
                        ?(
                            <li><Link className="--newHeader-main-row-col-menu-link" to="/admin">Admin</Link></li>
                        ):(
                            <></>
                        )
                    }
                </ul>
            </div>
            <div className="--newHeader-main-row-col-user">
                <div className="--newHeader-main-row-col-user-icon">
                    <span className="material-icons --user-icon">
                    account_circle
                    </span>
                </div>
                <div className="--newHeader-main-row-col-user-options">
                {STORE_USER.user && STORE_USER.user.data
                ?(
                    <p><Link className="link-email" to="/profile">{STORE_USER.user.data.user.email}</Link></p>
                ):(
                    <p>Login / Register</p>
                )
                    
                }
                </div>
            </div>
          </div>
      </header>
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
  
  
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);