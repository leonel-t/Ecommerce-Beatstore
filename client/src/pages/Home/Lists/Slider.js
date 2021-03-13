
import React from 'react';
import "./Slider.css"

const Slider = () => {
    var arr = [
        {   image:<img src="Izan-Llunas-en-Luis-Miguel-La-Serie-2018-1-e1525061588546-1024x502.png"/>,
            image:<img src="spider-man-remastered-ps5-esquire-4-1605525077.jpg"/>,
            image:<img src="1601498876_582320_1601498920_noticia_normal.jpg"/>
        }  
    ]

    return (
        <div className="slider">
            {arr.map((foto,id)=>{
                return <li key={id}>{foto.image.img}</li>
            })}
        
        </div>
    )

}

export default Slider;