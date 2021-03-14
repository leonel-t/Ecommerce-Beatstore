import React from "react";
import "./CatalogCard.css";
import {Link} from 'react-router-dom';


const CatalogCard = ({id, name, autor, image}) => {

    return (
        <div className="--CatalogCard">
            <div className="--CatalogCard-image">
                <img alt="albumimage" src={`http://localhost:3001/images/${image}`}/>
            </div>
            <div className="--CatalogCard-info">
                <p className="--CatalogCard-info-song"><Link className="--CatalogCard-link" to={`/product/${id}`}>{name}</Link></p>
                <p className="--CatalogCard-info-autor">{autor}</p>
            </div>
        </div>
    )
}

export default CatalogCard;