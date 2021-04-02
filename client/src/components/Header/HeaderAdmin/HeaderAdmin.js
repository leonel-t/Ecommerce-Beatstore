import React, {useEffect, useState} from "react";
//Redux
import {connect} from "react-redux"
import {fetchUser} from '../../../stores/user/user.actions';
//Image import
import Logo from '../../../assets/images/icon-logo.png'
//Route
import {Link} from 'react-router-dom'
//Internationalization
//import i18n from '../../../i18n';
import { withTranslation } from 'react-i18next';
//CSS
import '../HeaderHome/header-home.scss';

const HeaderHome = ({fetchUserEffect, STORE_CART, STORE_USER}) =>{

    // const changeLanguage = (lng) => {
    //     i18n.changeLanguage(lng);
    //   } 



    // element.current.addEventListener('scroll', ()=>{

    // })
    const [dropDown, setDropDown] = useState(false)
      const handleDropDown = ()=>{
        dropDown ? setDropDown(false) : setDropDown(true)
      }

    useEffect(() => {
        fetchUserEffect();
      }, [fetchUserEffect]);

      const shortenText = (name) =>{
        var separado = name.split(" ")
        return separado[0]
       } 

    return (
      <>
        <div className="--header-home-main">
            <div className="--header-home-logo">
            <Link  to='/'><img src={Logo} alt="BeatShop"></img></Link>
            <Link className='--header-h1-link' to='/'><h1>BeatStore </h1></Link>   
            </div>
            <div className="--header-home-menu">
                <ul>
                    <Link className='--header-home-link' to='/catalog'><li>Catalog</li></Link>
                    <Link className='--header-home-link' to='/oferts'><li>Oferts</li></Link>
                    <Link className='--header-home-link' to='/ranking'><li>Ranking</li></Link>
                    <div
                    onClick={handleDropDown}
                    className='--header-home-dropdown'>
                      Menu <i class="fas fa-sort-down"></i>
                    </div>

                </ul>
            </div>  
                    
            <div className="--header-home-perfil">
            {STORE_USER.user && STORE_USER.user.data
                ?(
                    <ul>  
                       <li  >
                         <Link className='--header-home-link-login' to='/profile'>
                         {shortenText(STORE_USER.user.data.user.name) || STORE_USER.user.data.user.email}
                         </Link>
                         </li>
                         <Link className='--header-account-link' to='/profile'>  <span className="material-icons --user-img"> account_circle </span></Link>
                            <div className="--header-home-cart">
                            <Link to='/cart'><span className="material-icons --header-home-perfil-icon"> shopping_cart</span></Link>
                                <span className="--header-home-cart-item-length">
                                  {STORE_CART && STORE_CART.length > 0
                                  ?(
                                      STORE_CART.length
                                  ):(
                                      0
                                    )
                                   }
                                </span>
                        </div>     
                    </ul>
               ):(
                    <ul>
                       <li> <Link className='--header-home-link-login' to='/login'> Login</Link> </li>
                       <Link className='--header-account-link' to='/profile'> <span className="material-icons --user-img"> account_circle </span></Link>
                        <div className="--header-home-cart">
                        <Link to='/cart'><span className="material-icons --header-home-perfil-icon"> shopping_cart</span></Link>
                                <span className="--header-home-cart-item-length">
                                  {STORE_CART && STORE_CART.length > 0
                                  ?(
                                      STORE_CART.length
                                  ):(
                                      0
                                  )
                                  }
                                </span>
                        </div>
                        
                         
                    </ul>
                )}
                
            </div>
                  
            {/* <div className='--header-flag'>
              <button className="btn-en" onClick={() => changeLanguage('en')}></button>
              <button className="btn-es" onClick={() => changeLanguage('es')}></button>
            </div>     */}
        </div>

          <div className={dropDown ? "--header-home-dropdown-menu" : "--header-home-dropdown-menu-hidden"}>
             <div className="--header-home-dropdown-menu-box">
              <Link className='--header-home-link-dropdown' to='/catalog'><li>Catalog</li></Link>
              <Link className='--header-home-link-dropdown' to='/catalog'><li>Oferts</li></Link>
              <Link className='--header-home-link-dropdown' to='/catalog'><li>Ranking</li></Link>
             </div>
          </div>

        </>
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
  
  
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HeaderHome));
