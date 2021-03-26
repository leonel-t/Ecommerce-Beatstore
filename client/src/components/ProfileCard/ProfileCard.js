import React, {useState} from "react"
import "./ProfileCard.css"
import profileImg from "../../assets/images/profile-image.jpg"
import sound from "../../assets/audio/system-shut-down.mp3"

const ProfileCard = ({ name, email }) => {

const audio = new Audio(sound);
      audio.volume=0.1;

    const handleLogout = (e) => {
        e.preventDefault()
        audio.play()
        settrancit(true)
        localStorage.clear()
       setTimeout(()=>{
        return window.location.replace("http://localhost:3001/logout")
       },1500)
    }
    const [trancit, settrancit] = useState(false)
    return (
        <div className="--profileCard-user">
            <div className={trancit ? "trancition-active" : "trancition"}></div>
            <div className="--profileCard-user-img">
                <img alt="profileImage" src={profileImg} />
            </div>
            <div className="--profileCard-user-info">
                <p className="--profileCard-user-info-name">{name}</p>
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