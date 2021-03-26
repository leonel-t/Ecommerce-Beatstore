import React from 'react';
import './Container.css'
import {connect} from "react-redux";
import Wrapper from "../wrapper/Wrapper"
import ColorCard from '../ScrollBox/ColorCard';
import ScrollBox from '../ScrollBox/ScrollBox';

//Internationalization
import { withTranslation } from 'react-i18next';

const Container = ({t, STORE_PRODUCTS}) => {
    console.log(STORE_PRODUCTS)

    return (
        <div className='Container'>
            <h1>{t('page.home.sliders.1')}</h1>
            <Wrapper/>
            <h2>{t('page.home.sliders.2')}</h2>
            {STORE_PRODUCTS && STORE_PRODUCTS.length > 0
                ?( 
                    <ScrollBox>
                       { STORE_PRODUCTS.map((product, index) => {
                           return (
                            <ColorCard product={product} key={index} />
                            )
                       })}
                    </ScrollBox>
                    ):(
                        <p>{t("page.home.sliders.noBeats")}</p>
                       )           
                }
                <h2>{t('page.home.sliders.3')}</h2>
                <Wrapper/>
                <h2>{t('page.home.sliders.4')}</h2>
                {STORE_PRODUCTS && STORE_PRODUCTS.length > 0
                    ?( 
                    <ScrollBox>
                       { STORE_PRODUCTS.map((product, index) => {
                           return (
                            <ColorCard product={product} key={index} />
                            )
                       })}
                    </ScrollBox>
                    ):(
                        <p>{t("page.home.sliders.noBeats")}</p>
                        )
                }
                <h2>{t('page.home.sliders.5')}</h2>
                {STORE_PRODUCTS && STORE_PRODUCTS.length > 0
                    ?( 
                    <ScrollBox>
                       { STORE_PRODUCTS.map((product, index) => {
                           return (
                            <ColorCard product={product} key={index} />
                            )
                       })}
                    </ScrollBox>
                    ):(
                        <p>{t("page.home.sliders.noBeats")}</p>
                        )
               
                }
                <h2>{t("page.home.sliders.6")}</h2>
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
                        <p>{t("page.home.sliders.noBeats")}</p>
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
