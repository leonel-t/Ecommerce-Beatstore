
import React from 'react';
import {Link} from 'react-router-dom';
import "./Card.css"

const Card = ({id, name, artist, image, date}) => {
 
    var sectionStyle = {// eslint-disable-next-line  
      backgroundImage: "url(" + ` http://localhost:3001/images/${ image }` + ")" 
      };
    return (
        <div style={ sectionStyle} className="w3-content">
            <div className="mySlides">
                <Link className="link-style" to={`/product/${id}`}><h3>{name}</h3></Link>
                <p>{artist}</p>
                <p>Año {date}</p>
                <br/>
            </div>
        </div>
    )

}

export default Card;