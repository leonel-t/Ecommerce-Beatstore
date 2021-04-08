import React from "react";
import "./boxMessage.css";
import swal from 'sweetalert';
import axios from 'axios';
import {serverUrl} from '../../auxiliar/variables';
const BoxMessage = ({username , idFrom, idTo,  date}) => {
 
    const handleLike = ()=>{

        swal({
            text: `Reply to ${username}`,
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
                    url: `${serverUrl}/messages/`,
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    data: {
                      idTo: idTo,
                      idFrom: idFrom,
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
        
            
            <div className="mailing">
                <span 
                onClick={()=> handleLike()}
                className="material-icons mail">
                mail_outline
                </span>
            </div>
        
    )
}

export default BoxMessage;