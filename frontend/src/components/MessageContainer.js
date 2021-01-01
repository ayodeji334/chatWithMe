
import MessageHeader from './MessageHeader';
import MessageBody from './MessageBody';
import MessageFooter from './MessageFooter';
import { connect, useSelector } from 'react-redux';
import { getChatMessages } from '../utils/Actions/chatActions';

function MessageContainer({getMessages}) {
    const chat = useSelector(state => state.chat.selected_chat);
    getMessages(chat.id);

    return (
        <div className="flex flex-col h-full justify-items-auto">
            <MessageHeader currentChat={chat}/>
            <MessageBody chat={ chat }/>
            <MessageFooter chat={ chat }/>  
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMessages: (id) => dispatch(getChatMessages(id))
    }
}

export default connect(null, mapDispatchToProps)(MessageContainer);
