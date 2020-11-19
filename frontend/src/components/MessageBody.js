import React from 'react'
import Message from './Message';

function MessageBody() {
    const messages = [
        {
            id: 1,
            receiver_id: "jh23jsadj2sdsjds2",
            sender_id: "4839TkG79DsExbIi3rxA",
            message: "message",
            created_at: new Date(2020,9,17,2,34,40),
        },
        {
            id: 2,
            receiver_id: "jh23jsadj2sdsjds2",
            sender_id: "4839TkG79DsExbIi3rxA",
            message: "message 2",
            created_at: new Date(2020,9,17,2,35,40),
        },
         {
            id: 3,
            receiver_id: "4839TkG79DsExbIi3rxA",
            sender_id: "jh23jsadj2sdsjds2",
            message: "message",
            created_at: new Date(2020,9,17,2,39,40),
        },
          {
            id: 4,
            receiver_id: "jh23jsadj2sdsjds2",
            sender_id: "4839TkG79DsExbIi3rxA",
            message: "message 4",
            created_at: new Date(2020,9,17,2,34,40),
        }
    ]
     useEffect(() => {
       var messageBodyElm = document.getElementById('message-body');
       messageBodyElm.scrollTop = messageBodyElm.scrollHeight; // scroll to the bottom of the chat
     }, [messages]);
    
    return (
        <div id="message-body">
            <p className="info">
                Messages and calls are encrypted. No one outside this chat can see it
            </p>
            <div className="messages-container">
                {
                    messages.map(message => (
                        <Message key={message.id} message={ message }/>
                    ))
                }
            </div>
        </div>
    )
}

export default MessageBody
