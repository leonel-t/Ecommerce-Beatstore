import React from "react";
import "./FansCard.css";
import imgProfile from "./profile-image.png"

const FansCard = ({username , date}) => {

    return (
        <div className="--FansCard">
            <div className="--FansCard-image">
                <img alt="userimage" src={imgProfile}/>
            </div>
            <div className="--FansCard-content">
                <p className="--FansCard-content-username">{username}</p>
                <p className="--FansCard-content-date">{date}</p>
            </div>
        </div>
    )
}

export default FansCard;