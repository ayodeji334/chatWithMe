import React from 'react'

function Message({message}) {
    const uid = "4839TkG79DsExbIi3rxA";
    function convertTime(time){
        const convertToMil = time.seconds * 1000;
        const date = new Date(convertToMil);
        return date.toString();
    };
    return (
        <div className={`chat-message 
            ${message.receiver_id === uid ? "chat_message_receive" : "chat_message_send"}`}>
                <p className="m-0 p-1">
                    {message.message} 
                </p>
            <div className="m-0 text-right">
                <span className="time">{convertTime(message.created_at)}</span>
            </div>
        </div>
    )
}

export default Message
