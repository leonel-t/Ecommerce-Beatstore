import React, { useEffect , useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMessagesConversation} from '../../stores/user/user.actions';
import "./historyMessages.css";

const HistoryMessages =  ({usernameFrom,idFrom, idTo,username}) => {
    
    const [messages, setMessages] = useState([]);
    const dispatch = useDispatch();
    
    console.log("idTo---->",idTo)

    useEffect( () => {
        console.log("ENTREEEEEEE")
        if(idTo){
            dispatch(getMessagesConversation(idFrom,idTo))
        }
        
     }, [])
     const conversation = useSelector(state => state.userReducers)
    const conver = conversation.conversation;

    useEffect(() => {
        if(conver){
            setMessages(conver)
         }
    }, [])
    console.log("messages----->",conver)
    const orden = conver.sort(function(a, b) {
        return a.id - b.id;
      })
    console.log("orden----->",orden)
    useEffect(() => {
        setMessages(orden)
    }, [])
    

    return (
        <div>
          <div className="messagesTit"><h1>History messages</h1></div>
          <div className="messagesTable">
            <table className="tableBox">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="userCol"
                  >
                    USER
                  </th>
                  <th
                    scope="col"
                  >
                    MESSAGE
                  </th>
                  
                </tr>
              </thead>

                        
                <tbody>
                {orden && messages.length > 0 ? (
                    messages.map((m) => ( 
                        
                      <tr key={m.id}>
                        <td className="userCol">
                          <div >
                            <div>
                              <p>
                              {m.from === idFrom ? usernameFrom : username }
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p>
                          {m.data}
                          </p>
                        </td>
                        </tr>
                          
                    ))): (
                    <tr>
                         <td colSpan={2}>No Messages</td>
                     </tr>
                 )
                 
                }
                    </tbody>
            </table>
          </div>
        
        </div>
    )
}

export default HistoryMessages;