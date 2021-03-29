import React, { useState } from "react";
import CommentCard from "../CommentCard/CommentCard";
import RelatedTracks from '../RelatedTracks/RelatedTracks';
import FansCard from "../FansCard/FansCard";
import "./TabPanel.css";
//Internationalization
import { connect } from "react-redux";

import { withTranslation } from 'react-i18next';
import sound from "../../../assets/audio/tab-sound.ogg"
import '../RelatedTracks/RelatedTracks.css';
const FansMap = [
  {
    username: "pepe",
    date: "liked this track 5 days ago",
  },
  {
    username: "pepe",
    date: "liked this track 5 days ago",
  },
  {
    username: "pepe",
    date: "liked this track 5 days ago",
  },
  {
    username: "pepe",
    date: "liked this track 5 days ago",
  },
];



const TabPanel = ({ t, product, relatedArtist, related }) => {
  const [relatedTrack, setRelatedTrack] = useState(false);
  const [fans, setFans] = useState(false);
  const [comments, setComments] = useState(true);

  const audio = new Audio(sound);
  audio.volume = 0.1;

  const handleClick = (param) => {
    switch (param) {
      case "relatedTrack":
        return () => {
          audio.play()
          setComments(false);
          setRelatedTrack(true);
          setFans(false);
        };
      case "comments":
        return () => {
          audio.play()
          setRelatedTrack(false);
          setFans(false);
          setComments(true);
        };
      case "fans":
        return () => {
          audio.play()
          setFans(true);
          setComments(false);
          setRelatedTrack(false);
        };
      default:
        break;
    }
  };

  return (
    <div className="--TabPanel-div">

      <div className="--TabPanel-div-row">
        <div
          onClick={handleClick(relatedTrack ? "" : "relatedTrack")}
          className={
            relatedTrack ? "--TabPanel-div-col-active" : "--TabPanel-div-col"
          }
        >
          <p>{t("page.product.relatedTracks")}</p>
        </div>
        <div
          onClick={handleClick(comments ? "" : "comments")}
          className={
            comments ? "--TabPanel-div-col-active" : "--TabPanel-div-col"
          }
        >
          <p>{t("page.product.comments")}</p>
        </div>
        <div
          onClick={handleClick(fans ? "" : "fans")}
          className={fans ? "--TabPanel-div-col-active" : "--TabPanel-div-col"}
        >
          <p>{t("page.product.fans")}</p>
        </div>
      </div>
      {/* Containers */}
      <div className="--TabPanel-div-container">
        <div
          className={
            relatedTrack
              ? "--TabPanel-div-container-col-active"
              : "--TabPanel-div-container-col"
          }
        >
          {
            related && related.length > 0
              ? (

                related.map((relate, index) => {
                  console.log("este es", relate)
                  return (
                    <RelatedTracks
                      id={relate.id}
                      image={relate.image}
                      key={index}
                      title={relate.name}
                      author={relate.artist}
                      price={relate.price}
                    ></RelatedTracks>
                  );
                })
              ) : (<div></div>)
          }
        </div>
        <div
          className={
            comments
              ? "--TabPanel-div-container-col-active"
              : "--TabPanel-div-container-col"
          }
        >
          {product && product.comments && product.comments.length > 0
            ? (
              product.comments.map((comment, index) => {
                return (
                  <CommentCard
                    key={index}
                    username={comment.author}
                    date={"12/10/2001"}
                    comment={comment.comment}
                  />
                );
              })
            ) : (
              <></>
            )
          }
        </div>
        <div
          className={
            fans
              ? "--TabPanel-div-container-col-active"
              : "--TabPanel-div-container-col"
          }
        >
          {FansMap.map((fan, index) => {
            return (
              <FansCard key={index} username={fan.username} date={fan.date} />
            );
          })}
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    relatedArtist: state.productsReducers.productCategories


  };
};
export default connect(mapStateToProps)(withTranslation()(TabPanel));
