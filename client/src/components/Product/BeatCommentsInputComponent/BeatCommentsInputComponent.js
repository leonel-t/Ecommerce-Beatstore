import React, {useState} from 'react';
import './BeatCommentsInputComponent.css';

const BeatCommentsInputComponent = ({action, product}) =>{

    const [comment, setComment] = useState();
    const [visibleInput, setVisibleInput] = useState(true)

    const handleKeyPress = (event) => {
        let obj = {
            author: localStorage.getItem("email"),
            text: comment
        }
        if(event.key === 'Enter'){
            setVisibleInput(false)
            return action(product, obj)
        }
      }

    return (
        <div className="--BeatCommentsInputComponent-div">
            {visibleInput
                ?(
                    <input
             onChange={(e)=> setComment(e.target.value)}
             onKeyPress={(e) => handleKeyPress(e)}
             type="text" 
             className="--BeatCommentsInputComponent-input"
             placeholder="Add your comment..."
             >

            </input>
                ):(
                    <p className="--BeatCommentsInputComponent-div-comment-added">
                        Thanks for your comment
                    </p>
                )
            }
        </div>
        
    )
}

export default BeatCommentsInputComponent;