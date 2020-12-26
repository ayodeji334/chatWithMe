import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { BiMessageAltAdd } from 'react-icons/bi'

function AddChatBtn() {
    return (
        <div className="fixed z-30 bottom-40 right-10">
            <IconButton
                className="focus:outline-none border-none bg-red-400"
                isRound={true}
                // colorScheme='red-800'
                fontSize="24px"
                name="add-chat-btn"
                icon={<BiMessageAltAdd />}
                size="lg"
                aria-label="add_chat" />
        </div>
    )
}

export default AddChatBtn
