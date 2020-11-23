import React, {useEffect} from 'react'
import Message from './Message';
import Loading from './Loading';

function MessageBody() {
    const messages = [
        {
            id: 1,
            receiver_id: "jh23jsadj2sdsjds2",
            sender_id: "4839TkG79DsExbIi3rxA",
            message: "message",
            created_at: new Date(2020, 9, 17, 2, 34, 40),
        },
        {
            id: 2,
            receiver_id: "jh23jsadj2sdsjds2",
            sender_id: "4839TkG79DsExbIi3rxA",
            message: "message 2",
            created_at: new Date(2020, 9, 17, 2, 35, 40),
        },
        {
            id: 3,
            receiver_id: "4839TkG79DsExbIi3rxA",
            sender_id: "jh23jsadj2sdsjds2",
            message: "message received",
            created_at: new Date(2020, 9, 17, 2, 39, 40),
        },
        {
            id: 4,
            receiver_id: "jh23jsadj2sdsjds2",
            sender_id: "4839TkG79DsExbIi3rxA",
            message: "message 4",
            created_at: new Date(2020, 9, 17, 2, 34, 40),
        }
    ];

    useEffect(() => {
        var messageBodyElm = document.getElementById('message-body');
        messageBodyElm.scrollTop = messageBodyElm.scrollHeight; // scroll to the bottom of the chat
    }, []);
    
    return (
        <div id="message-body" className="message-body px-3 py-2">
            {
                true ?
                    <>
                        <p className="text-center w-full p-2 font-semi-bold">
                            Messages and calls are encrypted. No one outside this chat can see it
                        </p>
                        <div className="messages-container">
                            {
                                messages.map(message => (
                                    <Message key={message.id} message={ message }/>
                                ))
                            }
                        </div>
                    </>
                    :
                    <Loading />
            }
        </div>
    )
}

export default MessageBody
