import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import "./ranking.scss";
import RankingItem from "./RankingItem/RankingItem"
const Ranking = ({ STORE_PRODUCTS }) => {


  window.scrollTo({
    top: 0,
    left: 0,
    behavir: 'smooth'
  });

  useEffect(() => {


  }, []);

  return (
    <>
        {!STORE_PRODUCTS
            ?(
                <>
                    <p>Cargando</p>
                </>
            ):(
                <>
                {STORE_PRODUCTS.products && STORE_PRODUCTS.products.length > 0
                 ? (
                    <main className="--ranking--main">
                    {STORE_PRODUCTS.products.sort(function (a, b) {
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
                            <RankingItem 
                                key={index}
                                position={index}
                                id={product.id}
                                name={product.name}
                                description={product.description}
                                image={product.image}
                                artist={product.artist}
                                reproductions={product.reproductions}
                            />
                        )
                    }) }
                    </main>
                    )
                : (
                    <p>Not Products</p>
                    )
                }
                        
                </>
            )
        }
    </>
  )
}

const mapStateToProps = state => {
  return {
    STORE_PRODUCTS: state.productsReducers,
  }
}

export default connect(mapStateToProps)(Ranking);