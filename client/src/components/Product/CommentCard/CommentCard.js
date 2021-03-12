import React from "react";
import "./CommentCard.css";
import imgProfile from "./profile-image.png"

const CommentCard = ({username , date , comment}) => {

    return (
        <div className="--CommentCard">
            <div className="--CommentCard-imageDiv">
                <img alt="profile" src={imgProfile}/>
            </div>
            <div className="--CommentCard-contentDiv">
                <div className="--CommentCard-contentDiv-commentInfo">
                    <span className="--CommentCard-contentDiv-commentInfo-userName">{username}</span>
                    <span>  ·  </span>
                    <span className="--CommentCard-contentDiv-commentInfo-date">{date}</span>
                </div>
                <div className="--CommentCard-contentDiv-comment">
                    <span>{comment}</span>
                </div>
            </div>
        </div>
    )
}

export default CommentCard;