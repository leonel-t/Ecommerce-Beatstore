import './beatComponent.css';
import React from 'react';
import imgTest from "../../../assets/images/albumImage.png";
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
                    <h1>Musica ligera</h1>
                    <div className="beatComponent--main-beatInfo-col-author">
{/*
                        <span class="material-icons icons ">
                            copyright
                        </span>
*/}
                        <p>Gustavo Cerati</p>
                    </div>
                    <div className="beatComponent--main-beatActions-col">
                        <div className="beatComponent--main-beatActions-col-div">
                            <span className="material-icons icons"> play_arrow </span>
                            <p>500</p>
                        </div>
                        <div className="beatComponent--main-beatActions-col-div">
                            <span className="icon-bpm icons">BPM</span>
                            <p>150</p>
                        </div>
                        <div className="beatComponent--main-beatActions-col-div">
                            <span className="material-icons icons">music_note</span>
                            <p>Em</p>
                        </div>
                        <div className="beatComponent--main-beatActions-col-div">
                            <span className="material-icons icons">event</span>
                            <p>12/5/2020</p>
                        </div>
                    </div>
                </div>


                <div className="beatComponent--main-beatTags-col">

                </div>
            </div>
        </div>

    )
}


export default BeatComponent;
