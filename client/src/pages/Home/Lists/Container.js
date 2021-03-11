
import React from 'react';
import './Container.css'
import Cards from "./Cards"
import Cards2 from "./Cards2"


const Container = () => {
    return (
        <div className='Container'>
            <h2 id="title1">Most Popular</h2>
                <Cards/>
            <h2 id="title2">Recommends</h2>
                <Cards2/>
        </div>
        )
}

export default Container;