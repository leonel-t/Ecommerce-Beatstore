import React from 'react';
import "./Header.css"
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const AdminHeader = ({STORE_CART}) =>{


    return (
      <header className="--newHeader-main" >
          <div className="--newHeader-main-row">
            <div className="--newHeader-main-row-col-logo">
                <Link to="/"><img src={Logo} alt="BeatShop"></img></Link>
            </div>
            <div className="--newHeader-main-row-col-menu">

            </div>
            <div className="--newHeader-main-row-col-user">
                <div className="--newHeader-main-row-col-user-icon">
                    <span class="material-icons --user-icon">
                    account_circle
                    </span>
                </div>
                <div className="--newHeader-main-row-col-user-options">
                    <p>Login / Register</p>
                </div>
            </div>
          </div>
      </header>
    )
}


const mapStateToProps =  state => {
    return {
      STORE_CART : state.userReducers.cart
    }
  }
  
  
export default connect(mapStateToProps)(AdminHeader);

