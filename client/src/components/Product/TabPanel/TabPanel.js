import React, { useState } from "react";
import CommentCard from "../CommentCard/CommentCard";
import RelatedTracks from "../RelatedTracks/RelatedTracks";
import FansCard from "../FansCard/FansCard";
import "./TabPanel.css";
//Internationalization
import { withTranslation } from 'react-i18next';

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

const RelatedTrack = [
  {
    title: "Musica Ligera",
    autor: "Gustavo cerati",
    price: "500",
  },
  {
    title: "En Remolinos",
    autor: "Gustavo cerati",
    price: "500 $",
  },
  {
    title: "Signos",
    autor: "Gustavo cerati",
    price: "200 $",
  },
  {
    title: "Persiana americana",
    autor: "Gustavo cerati",
    price: "500 $",
  },
  {
    title: "Musica Ligera",
    autor: "Gustavo cerati",
    price: "500 $",
  },
];

const TabPanel = ({ t, product }) => {
  const [relatedTrack, setRelatedTrack] = useState(true);
  const [fans, setFans] = useState(false);
  const [comments, setComments] = useState(false);


  const handleClick = (param) => {
    switch (param) {
      case "relatedTrack":
        return () => {
          setComments(false);
          setRelatedTrack(true);
          setFans(false);
        };
      case "comments":
        return () => {
          setRelatedTrack(false);
          setFans(false);
          setComments(true);
        };
      case "fans":
        return () => {
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
          {RelatedTrack.map((related, index) => {
            return (
              <RelatedTracks
                key={index}
                title={related.title}
                author={related.autor}
                price={related.price}
              ></RelatedTracks>
            );
          })}
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

export default withTranslation()(TabPanel);
