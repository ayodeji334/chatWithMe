import { useState } from 'react'
import {
    Stack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody, 
    IconButton,
    ModalHeader,
    Heading
} from '@chakra-ui/react';
import { MdClose } from 'react-icons/md';
import SearchForm from '../components/SearchForm';
import { BiPlus } from 'react-icons/bi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import ChatItem from './ChatItem';
import CreateGroupForm from './CreateGroupForm';
import produce from 'immer';
import { useSelector } from 'react-redux';
import { FaBars } from 'react-icons/fa';
import FooterTab from './FooterTab';
import SlideMenu from './SlideMenu';

function Chatlist() {
    const uid = useSelector(state => state.firebase.profile.uid);
    const users = useSelector((state) => state.firestore.ordered.users);
    const chats = useSelector((state) => state.chat.user_chats);
    const [showMenu, setShowMenu] = useState(false);
    const [userChats, setUserChats] = useState(chats);
    const [query, setQuery] = useState("");
    const [openGroupModal, setOpenGroupModal] = useState(false);
    const [openChatModal, setOpenChatModal] = useState(false); 

    function openModal(event) {
        const clickBtnName = event.currentTarget.name;
        if (clickBtnName === "create-group-btn") {
            setOpenGroupModal(!openGroupModal);
        } else {
            setOpenChatModal(!openChatModal);
        }
    };

    const toggleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    const handleFilterChat = (e) => {
        setQuery(e.target.value);
        if (query === "") {
            setUserChats(chats);
        } else {
            const filterChats = (state) => {
                return produce(state, (draft) => {
                    return draft.filter((chat) => {
                        return chat.receiver_name.toLowerCase().includes(query);
                    });
                });
            };
            const newChatsArray = filterChats(chats);
            setUserChats(newChatsArray);
        };
    };

    function closeModal(event) {
        const clickCloseBtnName = event.currentTarget.name;
        if (clickCloseBtnName === "close-create-group-modal") {
            setOpenGroupModal(!openGroupModal);
        } else {
            setOpenChatModal(!openChatModal);
        }
    };

    return (
        <>
            <div className="chats-list h-full w-full border-r-2 border-fuchsia-600 bg-white">
                <SlideMenu show={showMenu} toggleShow={toggleShowMenu} />
                <div className="flex items-center justify-between py-3 px-2 border-b-2 border-fuchsia-600">
                    <Heading size="sm" fontSize="18px" className="pl-3">
                        Chats
                    </Heading>
                    <div className="hidden">
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
                    <div className="lg:hidden">
                        <button className="p-2 hover:bg-gray-100 rounded-full focus:outline-none" onClick={toggleShowMenu}>
                            <FaBars />
                        </button>
                    </div>
                </div>
                <div className="py-3 px-2">
                    <div className="lg:hidden">
                    {/* <Status /> */}
                    </div>
                    <form>
                        <input
                            type="text"
                            className="rounded-full bg-gray-200 p-3 w-full focus:outline-none"
                            placeholder="Search chats..."
                            onChange={handleFilterChat}
                        />
                    </form>
                </div>
                <div className="chat-list-container py-0 border-t border-gray-400 overflow-auto">
                    {
                        userChats.length === 0
                            ?
                                <div
                                    className="h-full w-full flex flex-col justify-center items-center">
                                    <p className="py-4 font-extrabold">You don't any chat add one to get started.</p>
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
                            <div className="flex justify-between border-b-1 py-3 px-2 border-b-2 border-gray-300">
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
                            <div className="flex justify-between border-b-1 py-3 px-2 border-b-2 border-gray-300">
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
            <FooterTab />
        </>
    );
}

export default Chatlist;
