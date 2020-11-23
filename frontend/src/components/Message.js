import React from 'react';

function Message({message}) {
    const uid = "4839TkG79DsExbIi3rxA";
    // function convertTime(time){
    //     const convertToMil = time.seconds * 1000;
    //     const date = new Date(convertToMil);
    //     return date.toString();
    // };
    return (
        <div className="chat-message my-2">
            <p className={`${message.receiver_id === uid ? "text-white chat_message_receive bg-gray-600" : "text-white chat_message_send bg-blue-600 "}`}>
                {message.message} 
            </p>
            <div className={`${message.receiver_id === uid ? "text-left" : "text-right"}`}>
                <span className="text-sm text-gray-600">{message.created_at.toLocaleTimeString()}</span>
            </div>
        </div>
    )
}

export default Message;
