
import MessageHeader from './MessageHeader';
import MessageBody from './MessageBody';
import MessageFooter from './MessageFooter';
import { useSelector } from 'react-redux';

function MessageContainer() {
    const chat = useSelector(state => state.chat.selected_chat)
    return (
        <div className="flex flex-col">
            <MessageHeader currentChat={chat}/>
            <MessageBody currentChat={chat}/>
            <MessageFooter  />  
        </div>
    )
}

export default MessageContainer;
