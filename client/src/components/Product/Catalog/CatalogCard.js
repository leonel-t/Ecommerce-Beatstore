import React from "react";
import "./CatalogCard.css";
import imgAlbum from "./albumImage2.jpg"

const CatalogCard = ({name, autor}) => {

    return (
        <div className="--CatalogCard">
            <div className="--CatalogCard-image">
                <img alt="albumimage" src={imgAlbum}/>
            </div>
            <div className="--CatalogCard-info">
                <p className="--CatalogCard-info-song">{name}</p>
                <p className="--CatalogCard-info-autor">{autor}</p>
            </div>
        </div>
    )
}

export default CatalogCard;