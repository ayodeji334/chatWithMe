import React from 'react'

function Chatlist() {
    return (
        <div className="h-full w-full">
            <div className="flex items-center justify-between">
                chat-header here.....
            </div>
            <div className="">
                 <form>
                    <input type="text" className="form-control search-box" placeholder="Search friends..."/>
                </form>
            </div>
            <div className="chat-list">
                <div className="list-group">
                    chatlist-items here....
                </div>
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
                        <SearchPeopleForm isNewChatAdded={closeModal}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default Chatlist
