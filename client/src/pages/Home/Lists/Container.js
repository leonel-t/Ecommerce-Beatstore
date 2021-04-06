import React from 'react';
import './Container.css'
import {connect} from "react-redux";
import Wrapper from "../wrapper/Wrapper"
import ColorCard from '../ScrollBox/ColorCard';
import ScrollBox from '../ScrollBox/ScrollBox';

//COMPONENTS
import Suscriptions from '../../../components/Home/Suscriptions/Suscriptions';
import AdsBanner from '../../../components/Home/AdsBanner/AdsBanner';
import Newsletter from '../../../components/Home/Newsletter/Newsletter';
//Internationalization
import { withTranslation } from 'react-i18next';


const Container = ({t, STORE_PRODUCTS}) => {

    return (
        <div className='Container'>
            <div className="top-divider"></div>
            <h2>{t('page.home.sliders.2')}</h2>
            {STORE_PRODUCTS && STORE_PRODUCTS.length > 0
                ?( 
                    <ScrollBox>
                        {STORE_PRODUCTS.sort(function (a, b) {
                            if (a.reproductions < b.reproductions) {
                                return 1;
                            }
                            if (a.reproductions > b.reproductions) {
                                return -1;
                            }
                            // a must be equal to b
                            return 0;
                            }).map((product, index)=>{
                           return (
                            <ColorCard product={product} key={index} />
                            )
                       })}
                    </ScrollBox>
                    // <Wrapper/>
                    ):(
                        <p>{t("page.home.sliders.noBeats")}</p>
                       )           
                }
                <h2>{t('page.home.sliders.3')}</h2>
                <Wrapper/>
                <Suscriptions></Suscriptions>
                <h2>{t('page.home.sliders.4')}</h2>
                {STORE_PRODUCTS && STORE_PRODUCTS.length > 0
                    ?( 
                    // <ScrollBox>
                    //    { STORE_PRODUCTS.map((product, index) => {
                    //        return (
                    //         <ColorCard product={product} key={index} />
                    //         )
                    //    })}
                    // </ScrollBox>
                    <Wrapper/>
                    ):(
                        <p>{t("page.home.sliders.noBeats")}</p>
                        )
                }
                <h2>{t('page.home.sliders.5')}</h2>
                {STORE_PRODUCTS && STORE_PRODUCTS.length > 0
                    ?( 
                    // <ScrollBox>
                    //    { STORE_PRODUCTS.map((product, index) => {
                    //        return (
                    //         <ColorCard product={product} key={index} />
                    //         )
                    //    })}
                    // </ScrollBox>
                    <Wrapper/>
                    ):(
                        <p>{t("page.home.sliders.noBeats")}</p>
                        )
               
                }
                <Newsletter></Newsletter>
                <h2>{t("page.home.sliders.6")}</h2>
                {STORE_PRODUCTS && STORE_PRODUCTS.length > 0
                    ?( 
                    // <ScrollBox>
                    //    { STORE_PRODUCTS.map((product, index) => {
                    //        return (
                    //         <ColorCard product={product} key={index} />
                    //         )
                    //    })}
                    // </ScrollBox>
                    <Wrapper/>
                    ):(
                        <p>{t("page.home.sliders.noBeats")}</p>
                        )
               
                }
                <h2>MAS LIKEADOS BABY</h2>
                {STORE_PRODUCTS && STORE_PRODUCTS.length > 0
                    ?( 
                    // <ScrollBox>
                    //    { STORE_PRODUCTS.map((product, index) => {
                    //        return (
                    //         <ColorCard product={product} key={index} />
                    //         )
                    //    })}
                    // </ScrollBox>
                    <Wrapper/>
                    ):(
                        <p>{t("page.home.sliders.noBeats")}</p>
                        )
               
                }
                <h1>{t('page.home.sliders.1')}</h1>
                <Wrapper/>
                
                <AdsBanner></AdsBanner>
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
