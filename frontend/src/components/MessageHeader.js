import React from 'react'
import {
    Avatar,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react";
import {
    BiArrowFromRight,
    BiDotsVerticalRounded,
    BiMinusCircle,
    BiTrash,
    BiUserMinus
} from "react-icons/bi";

function MessageHeader() {
    return (
        <div className="message-container-header flex flex-row justify-between items-center p-2 border-b border-gray-400">
            <div className="chat_user_detail flex items-center">
                <Avatar size="md" name={"Fawumi Odunayo"} src="..." />
                <div className="pl-2">
                    <h6 className="font-bold text-lg"><strong>{"Fawumi Odunayo"}</strong></h6>
                    {true ? <p className="text-sm">Online</p> : <p className="text-sm">Last seen 13 hour ago</p> }
                </div>
            </div>
            <div className="chat-buttons-group">
                <Menu closeOnSelect={true}>
                    <MenuButton
                        px={4}
                        py={2}
                        fontSize="18px"
                        transition="all 0.2s"
                        rounded="full"
                        borderWidth="0px"
                        backgroundColor="#e7e7e7"
                        _hover={{ bg: "purple.700", color: "white" }}
                    >
                        <BiDotsVerticalRounded />
                    </MenuButton>
                    <MenuList>
                        <div className="bg-none">
                            <button className="m-0 w-full p-3 text-red-500 flex items-center focus:outline-none hover:bg-gray-100 border-b border-gray-400"><BiArrowFromRight /> &nbsp; Clear Chat</button>
                            <button className="m-0 w-full p-3 text-red-500 flex items-center focus:outline-none hover:bg-gray-100 border-b border-gray-400"><BiTrash />  &nbsp; Delete Chat</button>
                            <button className="m-0 w-full p-3 text-red-500 flex items-center focus:outline-none hover:bg-gray-100 border-b border-gray-400"><BiUserMinus />  &nbsp; Unfollow User</button>
                            <button className="m-0 w-full p-3 text-red-500 flex items-center focus:outline-none hover:bg-gray-100"><BiMinusCircle />  &nbsp; Block User</button>
                        </div>
                    </MenuList>
                </Menu>
            </div>
        </div>
    )
}

export default MessageHeader
