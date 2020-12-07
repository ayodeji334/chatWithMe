import { useEffect, useState } from 'react'
import {
    Stack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody, 
    IconButton,
    ModalHeader
} from '@chakra-ui/react';
import { MdClose } from 'react-icons/md';
import SearchForm from '../components/SearchForm';
import { BiPlus } from 'react-icons/bi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import ChatItem from './ChatItem';
import CreateGroupForm from './CreateGroupForm';
import { connect } from 'react-redux';
import produce from 'immer';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import Status from '../screens/Status';

function Chatlist({ user_chats }) {
    const [userChats, setUserChats] = useState(user_chats);
    const [query, setQuery] = useState("");
    const [openGroupModal, setOpenGroupModal] = useState(false);
    const [openChatModal, setOpenChatModal] = useState(false);
    const uid = useSelector(state => state.firebase.auth.uid);

    useFirestoreConnect([
        { collection: 'users' },
        { collection: 'chats', where: ["sender_id", "==", uid] },
        { collection: 'chats', where: ["receiver_id", "==", uid] }
    ]);
    const users = useSelector((state) => state.firestore.ordered.users);
    const chats = useSelector(state => state.firestore.ordered.chats);

    console.log(chats);

    function openModal(event) {
        const clickBtnName = event.currentTarget.name;
        if (clickBtnName === "create-group-btn") {
            setOpenGroupModal(!openGroupModal);
        } else {
            setOpenChatModal(!openChatModal);
        }
    };

    useEffect(() => {
        const handleFilterChat = () => {
            if (query === "") {
                setUserChats(user_chats);
            } else {
                const filterChats = (state) => {
                    return produce(state, (draft) => {
                        return draft.filter((chat) => {
                           return chat.receiver_name.toLowerCase().includes(query);
                        });
                    });
                };
                const newChatsArray = filterChats(user_chats);
                setUserChats(newChatsArray);
            };
        };
        
        handleFilterChat();
    }, [query, user_chats]);

   function closeModal(event) {
        const clickCloseBtnName = event.currentTarget.name;
        if (clickCloseBtnName === "close-create-group-modal") {
            setOpenGroupModal(!openGroupModal);
        } else {
            setOpenChatModal(!openChatModal);
        }
    };

    return (
        <div className="h-full w-full lg:w-1/4 border-r-2 border-fuchsia-600 bg-white">
            <div className="flex items-center justify-between py-3 px-2 border-b-2 border-fuchsia-600">
                <h5 className="m-0 font-bold text-black text-xl">Chats</h5>
                <div>
                    <Stack isInline>
                        <IconButton
                            className="focus:outline-none border-none"
                            isRound={true}
                            name="create-group-btn"
                            onClick={openModal}
                            fontSize="18px"
                            icon={<AiOutlineUsergroupAdd />}
                            size="md"
                            aria-label="create-group"
                        />
                        <IconButton
                            className="focus:outline-none border-none"
                            isRound={true} fontSize="18px"
                            name="add-chat-btn"
                            onClick={openModal}
                            icon={<BiPlus />}
                            size="md"
                            aria-label="add_chat" />
                    </Stack>
                </div>
            </div>
            <div className="py-3 px-2">
                <div className="lg:hidden">
                   <Status />
                </div>
                <form className="hidden lg:block">
                    <input
                        type="text"
                        className="rounded-full bg-gray-200 p-3 w-full focus:outline-none"
                        placeholder="Search chats..."
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }}
                    />
                </form>
            </div>
            <div className="chat-list-container py-0 border-t border-gray-400 overflow-auto">
                {
                    !userChats
                        ?
                            <div
                                className="h-full w-full flex justify-center items-center">
                                <p>You don't any chat add one to get started.</p>
                            </div>
                        :
                            userChats.length > 0 ?
                               userChats.map((chat) => (
                                    <ChatItem chat={chat} key={chat.id} />
                                ))
                            :
                            <p className="py-3 w-full text-center text-lg font-bolder">
                                No chat matched
                            </p>  
                }
            </div>
            
            {/* Add New Chat Modal*/}
            <Modal
                isOpen={openChatModal}
                scrollBehavior="inside"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <div className="flex justify-between border-b-1 border-gray-300 py-3 px-2 border-b-2 border-gray-300">
                            <h5 className="m-0"><strong>New Chat</strong></h5>
                            <div>
                                <IconButton
                                    name="close-add-chat-modal"
                                    onClick={closeModal}
                                    className="focus:outline-none"
                                    fontSize="18px"
                                    isRound={true}
                                    icon={<MdClose />}
                                    size="sm" />
                            </div>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <SearchForm users={users} />
                    </ModalBody>
                </ModalContent>
            </Modal>
            
            {/* Create New Group Modal*/}
            <Modal
                isOpen={openGroupModal}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <div className="flex justify-between border-b-1 border-gray-300 py-3 px-2 border-b-2 border-gray-300">
                            <h5 className="m-0"><strong>Create New Group</strong></h5>
                            <div>
                                <IconButton
                                    onClick={closeModal}
                                    className="focus:outline-none"
                                    fontSize="18px"
                                    isRound={true}
                                    name="close-create-group-modal"
                                    icon={<MdClose />}
                                    size="sm" />
                            </div>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <CreateGroupForm />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}


function mapStateToProps(state) {
    return {
        user_chats: state.chat.current_user_chats
    }
};

export default connect(mapStateToProps)(Chatlist);
