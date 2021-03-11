import React, {useState} from "react";
import "./TabPanel.css";

const TabPanel = () => {

    const [relatedTrack, setRelatedTrack] = useState(true)
    const [comments, setComments] = useState(false)
    const [fans, setFans] = useState(false)

    const handleClick = (param)=>{
        switch (param) {
            case "relatedTrack":
            return ()=>{
                setComments(false)
                setRelatedTrack(true)
                setFans(false)
            }
            case "comments":
                return ()=>{

                    setRelatedTrack(false)
                    setFans(false)
                    setComments(true)
                   
                }
            case "fans":
                return ()=>{
                    setFans(true)
                    setComments(false)
                    setRelatedTrack(false)
                }
            default:
                break;
        }
    }

  return (
    <div className="--TabPanel-div">
      <div className="--TabPanel-div-row">
        <div 
        onClick={handleClick(relatedTrack ? "" : "relatedTrack")}
        className={relatedTrack ? "--TabPanel-div-col-active" : "--TabPanel-div-col"}>
            <p>Related Tracks</p>
        </div>
        <div 
        onClick={handleClick(comments ? "" : "comments")}
        className={comments ? "--TabPanel-div-col-active" : "--TabPanel-div-col"}>
            <p>Comments</p>
        </div>
        <div
        onClick={handleClick(fans ? "" : "fans")}
        className={fans ? "--TabPanel-div-col-active" : "--TabPanel-div-col"}>
            <p>Fans</p>
        </div>
      </div>
      {/* Containers */}
      <div className="--TabPanel-div-container">
        <div className={relatedTrack ? "--TabPanel-div-container-col-active" : "--TabPanel-div-container-col"}>
            <p>Related Tracks</p>
        </div>
        <div className={comments ? "--TabPanel-div-container-col-active" : "--TabPanel-div-container-col"}>
            <p>Comments</p>
        </div>
        <div className={fans ? "--TabPanel-div-container-col-active" : "--TabPanel-div-container-col"}>
            <p>Fans</p>
        </div>
      </div>
    </div>
  );
};

export default TabPanel;
