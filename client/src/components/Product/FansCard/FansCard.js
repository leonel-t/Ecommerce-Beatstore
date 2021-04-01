import React from "react";
import "./FansCard.css";
import imgProfile from "../../../assets/images/profile-image.jpg"
import moment from "moment";
const FansCard = ({username , date}) => {

    return (
        <div className="--FansCard">
            <div className="--FansCard-image">
                <img alt="userimage" src={imgProfile}/>
            </div>
            <div className="--FansCard-content">
                <p className="--FansCard-content-username">{username}</p>
                <span className="--FansCard-content-date">{moment(date).fromNow()}</span>                
            </div>
        </div>
    )
}

export default FansCard;