
import React from 'react';
import './Container.css'
import {connect} from "react-redux";
import Wrapper from "../wrapper/Wrapper"
import ColorCard from '../ScrollBox/ColorCard';
import ScrollBox from '../ScrollBox/ScrollBox';
import COLORS from '../ScrollBox/data.json';

//Internationalization
import { withTranslation } from 'react-i18next';
import i18n from '../../../i18n';

const Container = ({t, STORE_PRODUCTS}) => {
    console.log(STORE_PRODUCTS)
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }
    return (
        <div className='Container'>
            <div>
                <button onClick={() => changeLanguage('en')}>In Inglish</button>
                <button onClick={() => changeLanguage('es')}>En Español</button>
                <h1>{t('title')}</h1>
            </div>
                <Wrapper/>
            <h2>{t('title2')}</h2>

            {STORE_PRODUCTS && STORE_PRODUCTS.length > 0
                    ?( 
                    <ScrollBox>
                       { STORE_PRODUCTS.map((product, index) => {
                           console.log("ESTOSSS", product)
                           return (
                            <ColorCard product={product} key={index} />
                            )
                       })}
                    </ScrollBox>
                    ):(
                        <p>No Products</p>
                        )
               
                }
                <h2>The Best Alternative Confortable Hi-Fi Beats</h2>
                <Wrapper/>
            <h2>The Best Tango Hi-Fi Beats</h2>
            {STORE_PRODUCTS && STORE_PRODUCTS.length > 0
                    ?( 
                    <ScrollBox>
                       { STORE_PRODUCTS.map((product, index) => {
                           console.log("ESTOSSS", product)
                           return (
                            <ColorCard product={product} key={index} />
                            )
                       })}
                    </ScrollBox>
                    ):(
                        <p>No Products</p>
                        )
               
                }
    <h2>The Best Hip Hop Beats</h2>
            {STORE_PRODUCTS && STORE_PRODUCTS.length > 0
                    ?( 
                    <ScrollBox>
                       { STORE_PRODUCTS.map((product, index) => {
                           console.log("ESTOSSS", product)
                           return (
                            <ColorCard product={product} key={index} />
                            )
                       })}
                    </ScrollBox>
                    ):(
                        <p>No Products</p>
                        )
               
                }
        <h2>The Best Bachata Beats</h2>
            {STORE_PRODUCTS && STORE_PRODUCTS.length > 0
                    ?( 
                    <ScrollBox>
                       { STORE_PRODUCTS.map((product, index) => {
                           console.log("ESTOSSS", product)
                           return (
                            <ColorCard product={product} key={index} />
                            )
                       })}
                    </ScrollBox>
                    ):(
                        <p>No Products</p>
                        )
               
                }
                <div className="divider"></div>
        </div>
        )
}
const mapStateToProps =  state => {
    return {
      STORE_PRODUCTS : state.productsReducers.products
    }
  }
  
  
export default connect(mapStateToProps)(withTranslation()(Container));
