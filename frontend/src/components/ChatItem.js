import React from 'react';
import { Avatar, AvatarBadge, Badge, Stack } from "@chakra-ui/react";
import { NavLink, useRouteMatch } from 'react-router-dom';

function ChatItem({ chat }) {
    let { url } = useRouteMatch();

    // function convertTime(time){
    //     const convertToMil = time.seconds * 1000;
    //     const date = new Date(convertToMil).toString();
    //     return date;
    // };

    const truncateMessage = () => {
        const maxLength = 20;
        const text = chat.last_message;
        return text.length > maxLength
        ? `${text.substring(0, maxLength)}...`
        : `${text}`;
    };

    return (
        <NavLink
            to={`${url}/${chat.id}`}
            activeClassName="active_chat"
            exact
            className="flex items-center py-2 px-2 hover:bg-gray-100 border-b border-gray-400">
            <div className="chat-message-container w-9/12">
                <Stack isInline>
                    <Avatar name={chat.receiver_name} src={chat.receiver_img_src}>
                        <AvatarBadge size="0.95em" bg={chat.receiver_isOnline ? "green.500" : "gray.500"} />
                    </Avatar>
                    <div className="flex flex-col pl-2 leading-relaxed">
                        <h6 className="font-bold text-md"><strong>{chat.receiver_name}</strong></h6>
                        <p className="chat-message m-0 text-muted">{truncateMessage()}</p>
                    </div>
                </Stack>
            </div>
            <div className="chat-stat w-3/12 flex-col text-right">
                <span className="text-sm flex justify-center items-center text-gray-700 m-0">{chat.created_at.toLocaleTimeString()}</span>
                {
                    true
                    ? 
                        <span className="mt-1">
                            <Badge rounded="full">3</Badge>
                        </span> 
                    :
                    null
                }
            </div>
        </NavLink>
    )
}

export default ChatItem
