import React, {useState} from 'react';
import './BeatCommentsInputComponent.css';

const BeatCommentsInputComponent = ({action, product}) =>{

    const [comment, setComment] = useState();

    const handleKeyPress = (event) => {
        let obj = {
            author: localStorage.getItem("email"),
            text: comment
        }
        if(event.key === 'Enter'){
            return action(product, obj)
        }
      }

    return (
        <div className="--BeatCommentsInputComponent-div">
            <input
             onChange={(e)=> setComment(e.target.value)}
             onKeyPress={(e) => handleKeyPress(e)}
             type="text" 
             className="--BeatCommentsInputComponent-input"
             placeholder="Add your comment..."
             >

            </input>
        </div>
        
    )
}

export default BeatCommentsInputComponent;