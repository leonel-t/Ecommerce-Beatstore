import React, {useEffect } from 'react';
import {animated, useSpring } from "react-spring";
import { useScroll  } from "react-use-gesture"
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { fetchAllProducts } from '../../../stores/products/products.actions';

import "./wrapper.css";

const Wrapper = ({fetchAllProductsEffect,  PRODUCTS}) =>{

    const history = useHistory()
    useEffect(()=>{
        fetchAllProductsEffect()
      },[fetchAllProductsEffect]);

      const [styles, set] = useSpring(()=>({
          transform:"perspective(500px) rotateY(25deg)"
      }));

      const clamp = (value, clampAt = 30) =>{
          if(value > 0){
              return value > clampAt ? clampAt : value
          }else{
            return value < -clampAt ? -clampAt : value
          }
      };


      const bind = useScroll(event =>{
          set({
              transform:`perpective(500px) rotateY${
                  event.scrolling ? clamp(event.delta[0]) : 0
                }deg`
          })
      });

      const handleClick = (id)=>{
          history.push(`/product/${id}`)
      };

    return (
        <>
          {PRODUCTS.productLoading
            ?(  
            <div>
                <p>Cargando</p>
            </div>
            ):(
                <>
                {PRODUCTS && PRODUCTS.length > 0
                    ?(
                        <div 
                        {...bind()}
                        className="wrapper">
                            {
                                PRODUCTS.map((product, index)=>{
                                    let bg = `http://localhost:3001/images/${product.image}`
                                    return (
                                    <animated.div 
                                    key={index}
                                    onClick={()=> handleClick(product.id)}
                                    style={ {
                                        ...styles,
                                        cursor:`pointer`,
                                        backgroundImage:`url(${bg})`}
                                     }
                                    className="item"> 
                                      
                                      
                                    </animated.div>
                                    )
                                })
                            }
                        </div>
                    ):(
                        <div className="load">
                    
                        </div>
                    )
                }
                </>
            )
          }
        </>
    )
}

const mapStateToProps =  state => {
    return {
      PRODUCTS : state.productsReducers.products,
    }
  }
  const mapDispatchToProps = dispatch =>{
    return {
        fetchAllProductsEffect: () => dispatch(fetchAllProducts()),

    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);