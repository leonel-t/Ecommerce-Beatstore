import React from "react";
import "./CommentCard.css";
import imgProfile from "./profile-image.png"

const CommentCard = () => {

    return (
        <div className="--CommentCard">
            <div className="--CommentCard-imageDiv">
                <img alt="profile" src={imgProfile}/>
            </div>
            <div className="--CommentCard-contentDiv">
                <div className="--CommentCard-contentDiv-commentInfo">
                    <span>loren ipsum</span>
                    <span>  ·  </span>
                    <span>3 days ago</span>
                </div>
                <div className="--CommentCard-contentDiv-comment">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </div>
            </div>
        </div>
    )
}

export default CommentCard;