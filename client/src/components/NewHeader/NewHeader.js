import React from 'react';
import "./newHeader.css"
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
const NewHeader = () =>{


    return (
      <header className="--newHeader-main" >
          <div className="--newHeader-main-row">
            <div className="--newHeader-main-row-col-logo">
                <img src={Logo} alt="BeatShop"></img>
            </div>
            <div className="--newHeader-main-row-col-menu">
                <ul className="--newHeader-main-row-col-menu-ul">
                    <li><Link className="--newHeader-main-row-col-menu-link" to="/">Home</Link></li>
                    <li><Link className="--newHeader-main-row-col-menu-link" to="/catalog">Catalog</Link></li>
                    <li><Link className="--newHeader-main-row-col-menu-link" to="/login">Login</Link></li>
                    <li><Link className="--newHeader-main-row-col-menu-link" to="/add">Admin</Link></li>
                </ul>
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



export default NewHeader;