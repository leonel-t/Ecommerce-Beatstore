import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchUser} from '../../stores/user/user.actions'
import "./HomeHeader.css"
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import i18n from '../../i18n';

const HomeHeader = ({fetchUserEffect, STORE_USER}) =>{
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }     
    useEffect(() => {
        fetchUserEffect();
      }, [fetchUserEffect]);

      const divName = (name) =>{
       var separado = name.split(" ")
       return separado[0]
      } 

    return (
      <header className="--newHeader-main" >
          <div className="--newHeader-main-row">
            <div className="--newHeader-main-row-col-menu">
              <ul >
                <li>
                  <Link className="link-li" to="/catalog">
                    Catalog
                  </Link>
                </li>
                </ul>
            </div>
            <div className="--newHeader-main-row-col-logo">
                <Link to="/"><img src={Logo} alt="BeatShop"></img></Link>
            </div>
          <div className="--newHeader-main-row-col-menu2">
            <div>
              <Link className="link-li2" to="/cart">
                <span class="material-icons --cart-icon">
                  shopping_cart
                </span>
                  <span className="--header-cart-item-length">
                    {STORE_USER.cart && STORE_USER.cart.length > 0
                    ?(
                    STORE_USER.cart.length
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
                  <ul>
                     <li> 
                        <button className="btn-en" onClick={() => changeLanguage('en')}></button>
                      </li>
                      <li>
                        <button className="btn-es" onClick={() => changeLanguage('es')}></button></li>
                      <li>
                        <Link className="link-email" to="/profile">{divName(STORE_USER.user.data.user.name) || STORE_USER.user.data.user.email}</Link>
                      </li>
                  </ul>
                    
                ):(
                    <ul>
                      <li> 
                        <button className="btn-en" onClick={() => changeLanguage('en')}></button>
                      </li>
                      <li><button className="btn-es" onClick={() => changeLanguage('es')}></button></li>
                      <li><Link className="link-li" to="/login">Login</Link></li>
                      <li><Link className="link-li" to="/register">Register</Link></li>
                      
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
      STORE_USER : state.userReducers
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchUserEffect: () => dispatch(fetchUser()),
    };
  };
  
  
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);