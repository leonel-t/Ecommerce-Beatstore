import React from 'react';
import { connect } from 'react-redux';
import MiddleSearchBar from './MiddleSearchBar/MiddleSearchBar.js';
import Container from "./Lists/Container"

const Home = () =>{


    return (
        <div>
            <MiddleSearchBar/>
            <Container/>
           
        </div>
    )
}

const mapStateToProps =  state => {
    return {
      STORE_PRODUCTS : state
    }
  }
  
  
export default connect(mapStateToProps)(Home);
