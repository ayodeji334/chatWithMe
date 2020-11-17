import React from 'react'
import MessageHeader from './MessageHeader';
import MessageBody from './MessageBody';


function MessageContainer() {
    return (
        <div>
            <MessageHeader />
            <MessageBody  />
            <MessageFooter  />  
        </div>
    )
}

export default MessageContainer;
