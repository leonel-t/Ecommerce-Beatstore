import "./ItemCard.css"
import React, { isValidElement } from "react"
import testImg from "./albumImage2.jpg"

const ItemCard = ({ name, autor, price }) => {
    return (
        <div className="--ItemCard">
            <div className="--ItemCard-left">
                <img alt="albumImg" src={testImg} />
                <div className="--ItemCard-data">
                    <h2>{name}</h2>
                    <p>{autor}</p>
                </div>
            </div>
            <div className="--ItemCard-right">
                <span>${price}</span>
                <span class="material-icons">delete</span>
            </div>
        </div>
    )
}

export default ItemCard;