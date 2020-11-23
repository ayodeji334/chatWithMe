import { useRef, useState } from 'react'
import { Stack, Modal, ModalOverlay,ModalContent,ModalBody, IconButton, ModalHeader, useDisclosure } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md';
import SearchForm from '../components/SearchForm';
import { BiPlus } from 'react-icons/bi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import ChatItem from './ChatItem';

function Chatlist() {
    const chatHistroy = [
        {
            id: 1,
            updated_at: new Date(2020, 6, 17, 23, 45, 23),
            created_at: new Date(2020, 6, 12, 23, 34, 45),
            last_message: "I love you too",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Dunmola",
            receiver_img_src: "....",
        },
        {
            id: 2,
            updated_at: new Date(2020, 6, 17, 23, 45, 33),
            created_at: new Date(2020, 6, 11, 23, 34,34),
            last_message: "Bro odun you like black black.... Lol",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Nifemi",
            receiver_img_src: "....",
        },
        {
            id: 3,
            updated_at: new Date(2020, 6, 17, 23, 45, 17),
            created_at: new Date(2020, 6, 17, 23, 34, 11),
            last_message: "Bawo ni prof",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Babatunde Raji",
            receiver_img_src: "....",
        },
        {
            id: 4,
            updated_at: new Date(2020, 6, 17, 23, 45, 23),
            created_at: new Date(2020, 6, 12, 23, 34, 12),
            last_message: "I love you too",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Timmy",
            receiver_img_src: "....",
        },
        {
            id: 5,
            updated_at: new Date(2020, 6, 17, 23, 45, 12),
            created_at: new Date(2020, 6, 11, 23, 34, 59),
            last_message: "Bro odun show us your partner!.... Lol",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Femi",
            receiver_img_src: "....",
        },
        {
            id: 6,
            updated_at: new Date(2020, 6, 17, 23, 45, 48),
            created_at: new Date(2020, 6, 17, 23, 34, 12),
            last_message: "My gov, you disappointed me. I will lie to you sir",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Raji Fashola",
            receiver_img_src: "....",
        },
        {
            id: 7,
            updated_at: new Date(2020, 6, 17, 23, 45, 23),
            created_at: new Date(2020, 6, 12, 23, 34, 45),
            last_message: "I love you too",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Opeyemi",
            receiver_img_src: "....",
        },
        {
            id: 8,
            updated_at: new Date(2020, 6, 17, 23, 45, 33),
            created_at: new Date(2020, 6, 11, 23, 34,34),
            last_message: "Bro odun you like black black.... Lol",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Ayomide Ilupeju",
            receiver_img_src: "....",
        },
        {
            id: 9,
            updated_at: new Date(2020, 6, 17, 23, 45, 17),
            created_at: new Date(2020, 6, 17, 23, 34, 11),
            last_message: "Bawo ni prof",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Ayomikun Raji",
            receiver_img_src: "....",
        },
        {
            id: 10,
            updated_at: new Date(2020, 6, 17, 23, 45, 23),
            created_at: new Date(2020, 6, 12, 23, 34, 12),
            last_message: "I love you too",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Timilehin",
            receiver_img_src: "....",
        },
        {
            id: 11,
            updated_at: new Date(2020, 6, 17, 23, 45, 12),
            created_at: new Date(2020, 6, 11, 23, 34, 59),
            last_message: "Hello Temi, You are doing well!.... Lol",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Temi Otedola",
            receiver_img_src: "....",
        },
        {
            id: 12,
            updated_at: new Date(2020, 6, 17, 23, 45, 12),
            created_at: new Date(2020, 6, 11, 23, 34, 59),
            last_message: "Hello Ayomide, You are doing well!.... Lol",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Ayomide",
            receiver_img_src: "....",
        },
        {
            id: 13,
            updated_at: new Date(2020, 6, 17, 23, 45, 12),
            created_at: new Date(2020, 6, 11, 23, 34, 59),
            last_message: "Hello Sunday, You are doing well!.... Lol",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Sunday",
            receiver_img_src: "....",
        },
        {
            id: 14,
            updated_at: new Date(2020, 6, 17, 23, 45, 12),
            created_at: new Date(2020, 6, 11, 23, 34, 59),
            last_message: "Hello Itunu, You are doing well!.... Lol",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Itunu",
            receiver_img_src: "....",
        }
    ];
    const [searchquery, setSearchQuery] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const addChatBtnRef = useRef();

    const handleSearchChat = (e) => {
        e.preventDefault();
        console.log(searchquery);
    }

    return (
        <div className="h-full w-1/4 border-r-2 border-fuchsia-600 bg-white">
            <div className="flex items-center justify-between py-3 px-2 border-b-2 border-fuchsia-600">
                <h5 className="m-0 font-bold text-black text-xl"><strong>Chats</strong></h5>
                <div>
                    <Stack isInline>
                        <IconButton className="focus:outline-none" isRound={true} fontSize="18px" icon={<AiOutlineUsergroupAdd />} size="md" aria-label="create-group" />
                        <IconButton className="focus:outline-none" isRound={true} fontSize="18px" ref={addChatBtnRef} onClick={onOpen} icon={<BiPlus />} size="md" aria-label="add_chat" />
                    </Stack>
                </div>
            </div>
            <div className="py-3 px-2">
                 <form onSubmit={handleSearchChat}>
                    <input
                        type="text"
                        className="rounded-full bg-gray-200 p-3 w-full focus:outline-none"
                        placeholder="Search friends..."
                        onChange={(e) => {
                            setSearchQuery(e.target.value)
                        }}
                    />
                </form>
            </div>
            <div className="chat-list-container py-0 border-t border-gray-400 overflow-auto">
                {
                    chatHistroy.map((chat_histroy) => (
                        <ChatItem chat={chat_histroy} key={ chat_histroy.id} />
                    ))
                }
            </div>
             <Modal 
                onClose={onClose} 
                isOpen={isOpen}
                scrollBehavior="inside"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <div className="flex justify-between border-b-1 border-gray-300 py-3 px-2 border-b-2 border-gray-300">
                            <h5 className="m-0"><strong>New Chat</strong></h5>
                            <div>
                                <IconButton onClick={onClose} className="focus:outline-none" fontSize="18px" isRound={true} icon={<MdClose />} size="sm" />
                            </div>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <SearchForm />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default Chatlist
