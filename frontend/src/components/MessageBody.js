import React, {useEffect } from 'react'
import Message from './Message';
import Loading from './Loading';
import { connect, useSelector } from 'react-redux';
import { getChatMessages } from '../utils/Actions/chatActions';

function MessageBody() {
    const chat__messages = useSelector(state => state.chat.selected_chat_messages);
    const sortMessages = chat__messages.sort((a, b) => a.createdAt - b.createdAt);

    useEffect(() => {
        var messageBodyElm = document.getElementById('message-body');
        messageBodyElm.scrollTop = messageBodyElm.scrollHeight;
    }, [sortMessages]);

    return (
        <div id="message-body" className="message-body px-3 py-2 overflow-y-auto">
            {
                true ?
                    <>
                        <p className="text-center w-full p-2 font-semi-bold">
                            Messages and calls are encrypted. No one outside this chat can see it
                        </p>
                        <div className="messages-container">
                            {
                                sortMessages.length === 0
                                    ?
                                    null
                                    :
                                sortMessages.map(message => (
                                    <Message key={message.id} message={ message }/>
                                ))
                            }
                        </div>
                    </>
                    :
                    <Loading />
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMessages: (id) => dispatch(getChatMessages(id))
    }
}

export default  connect(null, mapDispatchToProps)(MessageBody)
