import React from 'react';
import "./Filter.css";
import { Link } from 'react-router-dom'


var options = [
    "All",
    "Tracks",
    "Musicians",
    "Playlists",
    "Albums",
    "Sound kits",
    "Services"
]

const Filter = () =>{


    return (
    <div className="dropdown">
      <span>| Filtrado por:</span>
          <div className="dropdown-content">
                {options.map((e,key) => {
                    return <Link key={key} to="/" className="option">{e}<br /></Link>;
                })}
            </div>
    </div>
    )
}



export default Filter;
