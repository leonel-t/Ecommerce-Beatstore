
import React from 'react';
import "./Slider.css"

import Spider from "./images-proof/spider-man-remastered-ps5-esquire-4-1605525077.jpg";
import Spider2 from "./images-proof/1601498876_582320_1601498920_noticia_normal.jpg";
import Izan from "./images-proof/Izan-Llunas-en-Luis-Miguel-La-Serie-2018-1-e1525061588546-1024x502.png"
const Slider = () => {

    return (
        <div className="containerSlider">
            <section className="slider">
                <img src={Izan} alt="izan"/>
                <img src={Spider} alt="spider"/>
                <img src={Spider2} alt="spider2"/>    
            </section>
        </div>
    )

}

export default Slider;