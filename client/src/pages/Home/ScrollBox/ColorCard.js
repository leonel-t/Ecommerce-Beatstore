import React from 'react';
import './colorCard.css';
import {useHistory} from "react-router-dom";
import {serverUrl} from '../../../auxiliar/variables'
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
        <div className="color-card" style={{ background:`url(${serverUrl}/images/${product.image})`, backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}>
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



export default ColorCard;