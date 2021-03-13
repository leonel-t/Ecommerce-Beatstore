import './beatComponent.css';
import React from 'react';
import imgTest from "../../../assets/images/albumImage.png";
import Spectrum from '../Spectrum/Spectrum';
/*
            <img src={imgTest}></img>
            <p>{product.id}</p>
            
*/
const BeatComponent = ({ product }) => {

    return (
        <div className="beatComponent--main">
            <div className="beatComponent--main-row">
                <div className="beatComponent--main-imagen-col">
                    <img alt="album" src={imgTest}></img>
                </div>
                <div className="beatComponent--main-beatInfo-col">
                    <span className="material-icons icon-size"> play_circle_outline </span>
                    <h1>Musica ligera </h1><p>Gustavo Cerati</p>
                    <div className="beatComponent--main-beatInfo-col-author">
                        
                    </div>
                    <div className="beatComponent--main-beatActions-col">
                        <div className="beatComponent--main-beatActions-col-div">
                            <span className="material-icons icons"> play_arrow </span>
                            500
                        </div>
                        <div className="beatComponent--main-beatActions-col-div">
                            <span className="icon-bpm icons">BPM</span>
                            150
                        </div>
                        <div className="beatComponent--main-beatActions-col-div">
                            <span className="material-icons icons">music_note</span>
                            Em
                        </div>
                        <div className="beatComponent--main-beatActions-col-div">
                            <span className="material-icons icons">event</span>
                            12/5/2020
                        </div>
                    </div>
                    <Spectrum></Spectrum>
                </div>


                <div className="beatComponent--main-beatTags-col">
                        
                </div>
            </div>
        </div>

    )
}


export default BeatComponent;
