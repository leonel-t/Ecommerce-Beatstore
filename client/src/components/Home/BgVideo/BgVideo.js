import React from "react";
import './video.css'
import bgVideoSrc from "../../../assets/videos/bg-home-smaller.mp4";
import bgVideoSrc2 from "../../../assets/videos/pexels-cottonbro-7351364.mp4"



const BgVideo = ()=>{
    return(
        <div className='vid'>
            <video id="myVideo"  loop autoPlay muted>
             <source src={bgVideoSrc} type="video/mp4" />
            </video>
        </div>
    )
}

export default BgVideo;