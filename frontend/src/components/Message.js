import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

function Message({message}) {
    const uid = useSelector(state => state.firebase.auth.uid);

    const convertTime = (time) => {
        const convertToMil = time.seconds * 1000;
        const date = new Date(convertToMil);
        const formattedDate = moment(date).startOf('millisecond').fromNow();
        return formattedDate;
    };
    
    return (
        <div className="chat-message my-3">
            <div
                className={`${message.receiverId === uid ?
                    "text-white chat_message_receive bg-blue-700" :
                    "text-white chat_message_send bg-gray-700"}`}
            >
                <h2 className="font-bold">
                    {message.senderId === uid ? null : message.senderFullName }
                </h2>
                <p>
                    {message.text} 
                </p>
            </div>
            
            <div className={`${message.receiverId === uid ? "text-left pl-2" : "text-right pr-2"}`}>
                <span className="text-sm text-gray-600">{convertTime(message.createdAt)}</span>
            </div>
        </div>
    )
}

export default Message;
