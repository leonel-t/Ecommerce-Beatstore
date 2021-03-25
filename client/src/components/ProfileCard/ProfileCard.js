import React from "react"
import "./ProfileCard.css"
import profileImg from "../../assets/images/profile-image.jpg"

const ProfileCard = ({ name, email }) => {
    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.clear()
        return window.location.replace("http://localhost:3001/logout")
    }
    return (
        <div className="--profileCard-user">
            <div className="--profileCard-user-img">
                <img alt="profileImage" src={profileImg} />
            </div>
            <div className="--profileCard-user-info">
                <p>{name}</p>
                <p>{email}</p>
            </div>
            <div className="--profileCard-user-butons">
                <button>Edit account</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default ProfileCard;