import { IconButton, Stack } from '@chakra-ui/core'
import React, { useState } from 'react'
import { BiSend, BiSmile } from 'react-icons/bi';

function MessageFooter() {
    const [newMessage, setMessage] = useState("");

    return (
        <div className="message_container_footer">
            <div className="emoji-container">
                <Stack isInline>
                    <IconButton isRound={true} icon={BiSmile} size="sm" aria-label="smiley" />
                    <IconButton isRound={true} icon="attachment" size="sm" aria-label="attachment" />
                </Stack>
            </div>
            <div className="message-form">
                <form onSubmit={handleSendMessage}>
                    <input className="message-input form-control" value={newMessage} onChange={handleChange} type="text" placeholder="Type your Message here...." required/>
                    <button className="btn btn-send">
                        <BiSend />
                    </button>
                </form>
            </div>
        </div>
    );

    function handleSendMessage(event) {
        event.preventDefault();
        // sendMessage(newMessage);
        setMessage("");
    }

    function handleChange(event) {
        const { value } = event.currentTarget;
        setMessage(value);
    }
}

export default MessageFooter;
