import React from "react";
import "./RelatedTracks.css";
import imgProfile from "./profile-image.png"

const RelatedTracks = ({title, author, price}) => {

    return (
        <div className="--RelatedTracks-main">
            <div className="--RelatedTracks-main-row">
                <div className="--RelatedTracks-main-col-play">
                    <span className="material-icons play-icon">
                        play_circle_outline
                    </span>
                </div>
                <div className="--RelatedTracks-main-col-img">
                    <img src={imgProfile} alt="album"></img>
                </div>
                <div className="--RelatedTracks-main-col-text">
                    <h3>{title}</h3>
                    <p>{author}</p>
                </div>
                <div className="--RelatedTracks-main-col-menu">
                    <div className="--RelatedTracks-main-col-menu-btn-b">
                        <button>Buy Now {price}</button>
                    </div>
                    <div className="--RelatedTracks-main-col-menu-btn-menu">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedTracks;