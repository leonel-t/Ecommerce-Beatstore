import React from 'react';
import PropTypes from 'prop-types';
import './colorCard.css';
import {useHistory} from "react-router-dom"
function ColorCard({ product }) {
  const history = useHistory()
  function handleColorCopy() {
    if(product && product.id){
      history.push(`/product/${product.id}`)
    }
  }

  return (
    <>
    {product && product.artist
      ?(
        <div className="color-card" style={{ background:`url(http://localhost:3001/images/${product.image})`, backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}>
        <button className="color-card__code" onClick={handleColorCopy}>
          {product.name.slice(0,16)}
        </button>
       </div>
      ):(
        <div className="color-card" style={{ backgroundColor:"white"  }}>
      <button className="color-card__code" onClick={handleColorCopy}>
      
      </button>
    </div>
      )
    }
      </>
  );

}

ColorCard.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorCard;