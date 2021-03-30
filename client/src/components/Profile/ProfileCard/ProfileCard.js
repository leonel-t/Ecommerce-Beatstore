import "./ProfileCard.css";
import React, {useState} from "react";
import profileImg from "../../../assets/images/profile-image.jpg";
import sound from "../../../assets/audio/system-shut-down.mp3";
import { withTranslation } from 'react-i18next';

const ProfileCard = ({ t,name, email }) => {

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
        <div className={"--profileCard-user"}>
            <div className={trancit ? "trancition-active" : "trancition"}></div>
            <div className={trancit ? "--profileCard-user--hidden" : "--profileCard-user-img"}>
                <img alt="profileImage" src={profileImg} />
            </div>
            <div className={trancit ? "--profileCard-user--hidden" : "--profileCard-user-info"}>
                <p className="--profileCard-user-info-name">{name}</p>
                <p>{email}</p>
            </div>
            <div className={trancit ? "--profileCard-user--hidden" : "--profileCard-user-butons"}>
                <button>{t("page.profile.profileCard.editButton")}</button>
                <button onClick={handleLogout}>{t("page.profile.profileCard.logout")}</button>
            </div>
        </div>
    )
}

export default withTranslation()(ProfileCard);