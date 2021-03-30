import React  from 'react';
import { connect } from 'react-redux';
import MiddleSearchBar from './MiddleSearchBar/MiddleSearchBar.js';
import Container from "./Lists/Container"
import MusicPlayer from "../../components/musicPlayer/MusicPlayer"
import BgVideo from "../../components/Home/BgVideo/BgVideo";
import deadmau from "../../assets/audio/deadmau5-not-exactly.mp3"
import imagemau from "../../assets/images/player/352704-admin.jpg"

const Home = ({STORE_PRODUCTS}) =>{


    return (
          <>
            {STORE_PRODUCTS.product
              ?(
               <>
                <BgVideo></BgVideo>
                <MiddleSearchBar/>
                <Container/> 
                <MusicPlayer name="Not exactly" singer="Deadmau 5" cover={imagemau} music={deadmau}/>
                {/* <MusicPlayer name={STORE_PRODUCTS.product.name} singer={STORE_PRODUCTS.product.artist} cover={`http://localhost:3001/images/${STORE_PRODUCTS.product.image}`} music={`http://localhost:3001/images/${STORE_PRODUCTS.product.audio}`}/> */}
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
