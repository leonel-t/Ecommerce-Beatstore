import React from "react";
import "./FansCard.css";
import imgProfile from "../../../assets/images/profile-image.jpg"
import moment from "moment";
import swal from 'sweetalert';
import axios from 'axios';

const FansCard = ({username , idAuthor, user,  date}) => {

    const handleLike = ()=>{

        swal({
            text: `Reply to ${idAuthor}`,
            content: "input",
            button: {
              text: "Write Your Message!",
              closeModal: true,
            },
          })
          .then(async (message) => {
            if (!message)  return swal("Write Some Message!");
           
     
                const options = {
                    method: 'POST',
                    url: 'http://localhost:3001/messages/',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    data: {
                      idTo: idAuthor,
                      idFrom: user.id,
                      message: message
                    }
                  };
                  
                return await axios.request(options).then(()=>{
                    return swal("Mensaje Enviado!");
                })

      
          })
          .catch(err => {
            if (err) {
              swal("Oh noes!", "Error", "error");
            } else {
              swal.stopLoading();
              swal.close();
            }
          });
    }

    return (
        <div className="--FansCard">
            <div className="--FansCard-image">
                <img alt="userimage" src={imgProfile}/>
            </div>
            <div className="--FansCard-content">
                <p className="--FansCard-content-username">{username}</p>
                <span className="--FansCard-content-date">{moment(date).fromNow()}</span>                
            </div>
            <div className="--FansCard-content">
            {user && user.id
            ?(
                <span 
                onClick={()=> handleLike()}
                class="material-icons --FansCard-content-reply-icon"> reply </span>
                  
            ):(
                <span></span>
            )

            }
            </div>
        </div>
    )
}

export default FansCard;