import React from "react";
import "./listproducts.scss";
import {serverUrl} from "../../../../auxiliar/variables";


const ListProducts = ({id, name, image, artist, description, addOfert})=>{

    const handleClick = ()=>{
        return addOfert(id)
    }
    return (
        <>
        <div className="--admin-list-main">
            <div className="--admin-list-main-img">
                <img width="150px" src={`${serverUrl}/images/${image}`} alt="User ph"/>
            </div>
            <div className="--admin-list-main-details">
                <p>Id : {id}</p>
                <p>name : {name}</p>
                <p>artist : {artist}</p>
                <p>description : {description}</p>
            </div >
            <div>
                <button
                onClick={handleClick}
                >Add Ofert</button>
            </div>
        </div>
        </>
       
    )
};


export default ListProducts;