import { IconButton, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiPhotoAlbum, BiSend, BiSmile, BiTab } from 'react-icons/bi';

function MessageFooter() {
    const [newMessage, setMessage] = useState("");

    return (
        <div className="border-t border-gray-400 flex flex-row items-center justify-between py-2">
            <div className="emoji-container w-2/12 pl-2">
                <Stack isInline>
                    <IconButton className="focus:outline-none" isRound={true} icon={<BiSmile />} size="sm" aria-label="smiley" />
                    <IconButton className="focus:outline-none" isRound={true} icon={<BiPhotoAlbum />} size="sm" aria-label="attachment" />
                    <IconButton className="focus:outline-none" isRound={true} icon={<BiTab />} size="sm" aria-label="attachment" />
                </Stack>
            </div>
            <div className="message-form w-10/12">
                <form onSubmit={handleSendMessage}>
                    <input className="message-input p-3 rounded-full focus:outline-none" value={newMessage} onChange={handleChange} type="text" placeholder="Type your Message here...." required/>
                    <button className="focus:outline-none p-3 hover:bg-pink-800 hover:text-white justify-center items-center rounded-full text-white bg-black">
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
