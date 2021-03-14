import React from 'react';
import Card from './Card';
import "./Cards2.css"
import Slider from '../Slider/Slider.js';

const Cards2 = () => {
    return (
        <div>
            <div id="ListC">
                <Slider/>
            </div>
            <div id="ListB">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card />
        
            </div>
        </div>
    )
}

export default Cards2;