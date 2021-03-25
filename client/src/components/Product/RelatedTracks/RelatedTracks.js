import React from "react";
import "./RelatedTracks.css";
import imgProfile from "./profile-image.png"
import { useHistory } from "react-router";
const RelatedTracks = ({ id, title, author, price, image }) => {
    const history = useHistory()
    function handleClick() {
        history.push("/product/" + id);
    }
    return (
        <div className="--RelatedTracks-main" onClick={handleClick}>
            <div className="--RelatedTracks-main-row">
                <div className="--RelatedTracks-main-col-play">
                    <span className="material-icons play-icon">
                        play_circle_outline
                    </span>
                </div>
                <div className="--RelatedTracks-main-col-img">
                    <img height="50px" src={"http://localhost:3001/images/" + image} alt="album"></img>
                </div>
                <div className="--RelatedTracks-main-col-text">
                    <h4>{title}</h4>
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