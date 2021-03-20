import React, { useState } from "react";
import CommentCard from "../CommentCard/CommentCard";
import RelatedTracks from "../RelatedTracks/RelatedTracks";
import FansCard from "../FansCard/FansCard";
import "./TabPanel.css";
import axios from "axios";
const commentsMap = [
  {
    username: "pepe",
    date: "1 day ago",
    coment: "buena cancion",
  },
  {
    username: "pepe",
    date: "1 day ago",
    coment: "buena cancion",
  },
  {
    username: "pepe",
    date: "1 day ago",
    coment: "buena cancion",
  },
  {
    username: "pepe",
    date: "1 day ago",
    coment: "buena cancion",
  },
  {
    username: "pepe",
    date: "1 day ago",
    coment:
      "buena cancion esto es una prueba de un comentario muy muy muy m,uy largooooooo para ver que pasaa",
  },
];

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

const TabPanel = () => {
  const [relatedTrack, setRelatedTrack] = useState(true);
  const [fans, setFans] = useState(false);
  const [comments2, setComments2] = useState([]);
  const [comments, setComments] = useState(false);

  function handleComment() {
    axios.get("http://localhost:3001/comments").then((comments) => {
      setComments(comments);
    });
  }
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
          handleComment();
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
          <p>Related Tracks</p>
        </div>
        <div
          onClick={handleClick(comments ? "" : "comments")}
          className={
            comments ? "--TabPanel-div-col-active" : "--TabPanel-div-col"
          }
        >
          <p>Comments</p>
        </div>
        <div
          onClick={handleClick(fans ? "" : "fans")}
          className={fans ? "--TabPanel-div-col-active" : "--TabPanel-div-col"}
        >
          <p>Fans</p>
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
          {comments2.map((comment, index) => {
            return (
              <CommentCard
                key={index}
                username={comment.author}
                date={"12/10/2001"}
                comment={comment.comment}
              />
            );
          })}
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

export default TabPanel;
