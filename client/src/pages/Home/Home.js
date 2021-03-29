import React, {useRef} from 'react';
import { connect } from 'react-redux';
import MiddleSearchBar from './MiddleSearchBar/MiddleSearchBar.js';
import Container from "./Lists/Container"
import MusicPlayer from "../../components/musicPlayer/MusicPlayer"

const Home = ({STORE_PRODUCTS}) =>{
const main = useRef()
console.log("ACA TENGO EL STORE",STORE_PRODUCTS.product)

    return (
          <>
            {STORE_PRODUCTS.product
              ?(
               <>
                <MiddleSearchBar/>
                <Container/> 
                <MusicPlayer name={STORE_PRODUCTS.product.name} singer={STORE_PRODUCTS.product.artist} cover={`http://localhost:3001/images/${STORE_PRODUCTS.product.image}`} music={`http://localhost:3001/images/${STORE_PRODUCTS.product.audio}`}/>
               </> 
              ):(
                <>
                <MiddleSearchBar/>
                <Container/>
               </> 
              )}
         </>
    )
}

const mapStateToProps =  state => {
    return {
      STORE_PRODUCTS : state.productsReducers
    }
}

  
export default connect(mapStateToProps)(Home);
