import React from 'react';
import './BeatCommentsInputComponent.css';

const BeatCommentsInputComponent = () =>{
    return (
        <div className="--BeatCommentsInputComponent-div">
            <input
             type="text" 
             className="--BeatCommentsInputComponent-input"
             placeholder="Add your comment..."
             >

            </input>
        </div>
        
    )
}

export default BeatCommentsInputComponent;