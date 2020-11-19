import React, { useRef, useState } from 'react'
import { Stack, Modal, ModalOverlay,ModalContent,ModalBody, IconButton, ModalHeader, useDisclosure } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md';
import SearchForm from '../components/SearchForm';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

function Chatlist() {
    const [searchquery, setSearchQuery] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const addChatBtnRef = useRef();

    const handleSearchUser = (e) => {
        e.preventDefault();
        console.log(searchquery);
    }

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
                        <IconButton fontSize="18px" icon={AiOutlineUsergroupAdd} size="md" aria-label="create-group" />
                        <IconButton fontSize="18px" ref={addChatBtnRef} onClick={onOpen} icon={BiMessageSquareAdd} size="md" aria-label="add_chat" />
                    </Stack>
                </div>
            </div>
            <div className="py-3 px-2">
                 <form onSubmit={handleSearchChat}>
                    <input
                        type="text"
                        className="rounded-full bg-pink-200 p-2 w-full focus:outline-none"
                        placeholder="Search friends..."
                        onChange={(e) => {
                            setSearchQuery(e.target.value)
                        }}
                    />
                </form>
            </div>
            <div className="chat-list py-3 px-2">
                <h1>Chatlist</h1>
            </div>
             <Modal 
                onClose={onClose} 
                isOpen={isOpen}
                scrollBehavior="inside"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <div className="modal-header" style={{display:"flex",alignItems:"center",justifyContent:"space-between",border:"1px solid #e7e7e7"}}>
                            <h5 className="m-0"><strong>New Chat</strong></h5>
                            <div>
                                <IconButton onClick={onClose} fontSize="18px" isRound={true} icon={MdClose} size="sm" aria-label="smiley" />
                            </div>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <SearchForm>
                            <form onSubmit={handleSearchUser}>
                                <input
                                    className="search_box"
                                    type="search"
                                    placeholder="Search people here..."
                                    required
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                    }}
                                />
                            </form>
                        </SearchForm>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default Chatlist
