
import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import Song from './Lobster - Homeworld.mp3';
import './FloatingCard.css';
import ReactAudioPlayer from 'react-audio-player';


const FloatingCard = () => {

    const [duration, setDuration] = useState();
    const [curTime, setCurTime] = useState();
    const [playing, setPlaying] = useState(false);
    const [clickedTime, setClickedTime] = useState();
  
    useEffect(() => {
      const audio = document.getElementById("audio");
  
      // state setters wrappers
      const setAudioData = () => {
        setDuration(audio.duration);
        setCurTime(audio.currentTime);
      }
  
      const setAudioTime = () => setCurTime(audio.currentTime);
  
      // DOM listeners: update React state on DOM events
      audio.addEventListener("loadedData", setAudioData);
  
      audio.addEventListener("timeUpdate", setAudioTime);
  
      // React state listeners: update DOM on React state changes
      playing ? audio.play() : audio.pause();
  
      if (clickedTime && clickedTime !== curTime) {
        audio.currentTime = clickedTime;
        setClickedTime(null);
      } 
      
      return () => {
        audio.removeEventListener("loadedData", setAudioData);
        audio.removeEventListener("timeUpdate", setAudioTime);
      }
    });  

    return (

        <div className="FloatingCardAudio" >
            <span class="material-icons">
                play_circle_outline
            </span>

            <span class="material-icons">
                pause_circle_outline
            </span>

            <ReactAudioPlayer
            id="audio"
            src={Song}
            width={600}
            height={400}
            autoPlay={true}
            controls
            
            />
        
        </div>
    )
}

const mapStateToProps =  state => {
    return {
      STORE_PRODUCTS : state
    }
  }
  
  
export default connect(mapStateToProps)(FloatingCard);
