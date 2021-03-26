import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchUser} from '../../stores/user/user.actions'
import "./HomeHeader.css"
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import i18n from '../../i18n';
//Internationalization
import { withTranslation } from 'react-i18next';

const HomeHeader = ({t,fetchUserEffect, STORE_USER}) =>{
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
                    {t('headers.homeHeader.catalog')}
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
                  <i className="fas fa-shopping-cart --cart-icon"></i>
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
                      <li><Link className="link-li" to="/login">{t('headers.homeHeader.login')}</Link></li>
                      <li><Link className="link-li" to="/register">{t('headers.homeHeader.register')}</Link></li>
                      
                    </ul>
                )
                    
                }
                </div>                

            </div>
               <div className="--newHeader-main-row-col-user-icon">
                  <Link to="/profile">
                   <i className="fas fa-user --user-icon"></i>
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
  
  
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HomeHeader));