import { Avatar, AvatarBadge, Badge, Stack } from "@chakra-ui/react";
import { connect, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { selectChat } from "../utils/Actions/chatActions";
import moment from 'moment';
import { getFirebase } from 'react-redux-firebase';
import { useEffect, useState } from "react";

function ChatItem({ selectChat, chat}) {
    const { id } = chat;
    const uid = useSelector(state => state.firebase.auth.uid);
    const [chatMessages, setChatMessages] = useState([]);
    const chat__message = chatMessages[chatMessages.length - 1];

    useEffect(() => {
        let subscribe = true;
        const firestore = getFirebase().firestore();
        firestore
            .collection('messages')
            .where('chatId', '==', id)
            .onSnapshot(querySnapshot => {
                const mssgs = [];
                querySnapshot.forEach(doc => {
                    mssgs.push({ id: doc.id, ...doc.data() })
                });
                const sortMssgs = mssgs.sort((a, b) => a.createdAt - b.createdAt);
                if (subscribe) {
                    setChatMessages(sortMssgs);
                }
            });
        return () => (subscribe = false);
    }, [id]);

    const convertTime = (time) => {
        const convertToMil = time.seconds * 1000;
        const date = new Date(convertToMil);
        const formattedDate = moment(date).startOf('milliseconds').fromNow();
        return formattedDate;
    };

    const truncateMessage = (text) => {
        const maxLength = 20;
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : `${text}`;
    };

    return (
        <NavLink
            to={`/chat/${chat.id}`}
            activeClassName="active_chat"
            exact
            onClick={() => {
                selectChat(chat);
            }}
            className="flex items-center py-2 px-2 hover:bg-gray-100 border-b border-gray-400">
            <div className="chat-message-container w-9/12">
                <Stack isInline>
                    <Avatar
                        name={chat.createdBy === uid ? chat.receiver : chat.createdBy}
                        src={chat.createdBy === uid ? chat.receiver : chat.createdBy}
                    >
                        <AvatarBadge size="0.95em" bg={false ? "green.500" : "gray.500"} />
                    </Avatar>
                    <div className="flex flex-col pl-2 leading-relaxed">
                        <h6 className="font-bold text-md">
                            {chat.createdBy === uid ? chat.receiver : chat.createdBy}
                        </h6>
                        <p className="chat-message m-0 text-muted">{
                            chat__message ? truncateMessage(chat__message.text) : null
                        }</p>
                    </div>
                </Stack>
            </div>
            <div className="chat-stat w-3/12 flex flex-col text-right">
                <span
                    className="text-xs md:text-sm text-gray-700 m-0">
                    {chat__message ? convertTime(chat__message.createdAt) : null }
                </span>
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

const mapDispatchToProps = (dispatch) => {
    return {
        selectChat: (chat) => dispatch(selectChat(chat))
    }
};

export default connect(null, mapDispatchToProps)(ChatItem);
