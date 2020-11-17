import React from 'react'
import {
    Avatar,
    Badge,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/core";
import {
    BiArrowFromRight,
    BiDotsVerticalRounded,
    BiMinusCircle,
    BiTrash,
    BiUserMinus
} from "react-icons/bi";

function MessageHeader() {
    return (
        <div className="message-container-header">
            <div className="chat_user_detail">
                <Avatar size="sm" name={"Fawumi Odunayo"} src="..." />
                <div className="pl-1">
                    <h6 className="m-0 text-red"><strong>{chatDetails.name}</strong></h6>
                    {false ? <Badge variant="outline" variantColor="green">Online</Badge> : <p className="text-muted m-0 user_online_status">last seen 13 hour ago</p> }
                </div>
            </div>
            <div className="chat-buttons-group">
                <Menu closeOnSelect={true}>
                    <MenuButton
                        px={4}
                        py={2}
                        fontSize="18px"
                        transition="all 0.2s"
                        rounded="100%"
                        borderWidth="0px"
                        backgroundColor="#e7e7e7"
                        _hover={{ bg: "purple.700", color: "white" }}
                    >
                        <BiDotsVerticalRounded />
                    </MenuButton>
                    <MenuList>
                        <div className="list-group">
                            <button className="list-group-item list-group-item-action"><BiArrowFromRight /> Clear Chat</button>
                            <button className="list-group-item list-group-item-action"><BiTrash /> Delete Chat</button>
                            <button className="list-group-item list-group-item-action"><BiUserMinus /> Unfollow User</button>
                            <button className="list-group-item list-group-item-action "><BiMinusCircle /> Block User</button>
                        </div>
                    </MenuList>
                </Menu>
            </div>
        </div>
    )
}

export default MessageHeader
