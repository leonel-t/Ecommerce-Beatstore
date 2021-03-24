import React, {useRef} from 'react';
import { connect } from 'react-redux';
import MiddleSearchBar from './MiddleSearchBar/MiddleSearchBar.js';
import Container from "./Lists/Container"
import FloatingCard from '../../components/FloatingCard/FloatingCard.js';

const Home = () =>{
const main = useRef()
console.log(main.current)


    return (
        <div ref={main}>
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
