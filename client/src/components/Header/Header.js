import React, { useState, useEffect } from 'react';
import "./Header.css"
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom"
import SearchImg from "./Search.png"
import './Header.css'
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../stores/products/products.actions';
import {fetchUser} from '../../stores/user/user.actions';

import { connect } from 'react-redux';

const Header = ({fetchUserEffect, STORE_CART, STORE_USER}) =>  {

    const [name, setName] = useState("");

    useEffect(() => {
        fetchUserEffect();
      }, [fetchUserEffect]);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (e) => {
        setName(e.target.value);
    }
        
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchProducts(name));
        history.push(`/results/${name}`);
    }

    const divName = (name) =>{
        var separado = name.split(" ")
        return separado[0]
       } 

    return (
      <header className="--newHeader-main" >
          <div className="--newHeader-main-row">
            <div className="--newHeader-main-row-col-menu4">
                <ul className="--newHeader-main-row-col-menu-ul">
                    {/* <li><Link className="--newHeader-main-row-col-menu-link" to="/admin">Admin</Link></li> */}
                
                <form onSubmit={handleSubmit} className='--newHeader-main-row-col-menu-form'>
                    <div className="--newHeader-main-row-col-menu-form-div">
                        <input onChange={handleChange} name="name" value={name} placeholder="Search..." />
                        <img className="--newHeader-main-row-col-menu-form-div-img" onClick={handleSubmit} src={SearchImg} alt="SearchIcon" />
                    </div>
                </form>

                </ul>

            </div>  
            <div className="--newHeader-main-row-col-logo">
                <Link to="/"><img src={Logo} alt="BeatShop"></img></Link>
            </div> 
            <div className="--newHeader-main-row-col-menu3">
                <div>
                    <Link className="--newHeader-main-row-col-menu-link" to="/cart">
                        <span class="material-icons --cart-icon">
                            shopping_cart
                        </span>
                         <span className="--header-cart-item-length">
                             {STORE_CART && STORE_CART.length > 0
                             ?(
                                STORE_CART.length
                             ):(
                                 0
                             )
                             }
                         </span>
                    </Link>
                </div>
            </div>          

            <div className="--newHeader-main-row-col-user">
                
                <div className="--newHeader-main-row-col-user-options">
                {STORE_USER.user && STORE_USER.user.data
                ?(
                    <p><Link className="link-email" to="/profile">{divName(STORE_USER.user.data.user.name) || STORE_USER.user.data.user.email}</Link></p>
                ):(
                    <ul>
                      <li><Link className="link-licopy" to="/">Home</Link></li>
                      <li><Link className="link-licopy" to="/login">Login</Link></li>
                      <li><Link className="link-licopy" to="/register">Register</Link></li>
                    </ul>
                )
                    
                }
                </div>
            </div>
            <div className="--newHeader-main-row-col-user-icon">
                <Link to="/profile">
                    <span class="material-icons --user-icon">
                     account_circle
                    </span>
                </Link>
            </div>
          </div>
      </header>
    )
}

const mapStateToProps =  state => {
    return {
        STORE_CART : state.userReducers.cart,
        STORE_USER : state.userReducers
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchUserEffect: () => dispatch(fetchUser()),
    };
  };
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);
