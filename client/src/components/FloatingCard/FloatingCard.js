
import React from 'react';
import Song from './Lobster - Homeworld.mp3'
import './FloatingCard.css';

var play = "play";
var playIcon = "https://www.flaticon.es/svg/vstatic/svg/4029/4029004.svg?token=exp=1615494523~hmac=96ca9630be244144467779ce1742106d";

const Play = (e) => {
    play === "play" ? play = "pause" : play = "play";    
    document.getElementById("fc")[play]();
}

const FloatingCard = () => {
    return (
        <div className="FloatingCardAudio" >
            <audio 
                id="fc"
                src={Song}
                autoPlay={false}
                onEnded={() => play = "pause"}
            />
            <div id="backgroundPlay">
                <img onClick={Play} id="buttonPlay" src={playIcon} alt="play icon" /> 
            </div>
        
        </div>
    )
}

export default FloatingCard;