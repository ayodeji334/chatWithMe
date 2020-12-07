import {
    Avatar,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react";
import {
    BiArrowBack,
    BiArrowFromRight,
    BiDotsVerticalRounded,
    BiMinusCircle,
    BiTrash,
    BiUserMinus
} from "react-icons/bi";
import { useHistory } from "react-router-dom";

function MessageHeader({currentChat}) {
    const history = useHistory();
    return (
        <div className="message-container-header flex flex-row justify-between items-center p-2 border-b border-gray-400">
            <div className="chat_user_detail flex items-center">
                <button
                    onClick={() => history.goBack(-1)}
                    className="lg:hidden rounded-full bg-white text-black mr-2 p-2"
                >
                    <BiArrowBack fontSize="20px" />
                </button>
                <Avatar size="sm" name={currentChat.receiver_name} src="..." />
                <div className="pl-2">
                    <h6 className="font-bold text-base lg:text-lg"><strong>{currentChat.receiver_name}</strong></h6>
                    {true ? <p className="text-xs lg:text-sm">Online</p> : <p className="text-sm">Last seen 13 hour ago</p> }
                </div>
            </div>
            <div className="chat-buttons-group">
                <Menu closeOnSelect={true}>
                    <MenuButton
                        px={4}
                        py={2}
                        fontSize="18px"
                        transition="all 0.2s"
                        rounded="full"
                        borderWidth="0px"
                        backgroundColor="#ffffff"
                        _hover={{ bg: "gray-200", color: "black" }}
                    >
                        <BiDotsVerticalRounded />
                    </MenuButton>
                    <MenuList>
                        <div className="bg-none">
                            <button className="m-0 w-full p-3 text-red-500 flex items-center focus:outline-none hover:bg-gray-100 border-b border-gray-400"><BiArrowFromRight /> &nbsp; Clear Chat</button>
                            <button className="m-0 w-full p-3 text-red-500 flex items-center focus:outline-none hover:bg-gray-100 border-b border-gray-400"><BiTrash />  &nbsp; Delete Chat</button>
                            <button className="m-0 w-full p-3 text-red-500 flex items-center focus:outline-none hover:bg-gray-100 border-b border-gray-400"><BiUserMinus />  &nbsp; Unfollow User</button>
                            <button className="m-0 w-full p-3 text-red-500 flex items-center focus:outline-none hover:bg-gray-100"><BiMinusCircle />  &nbsp; Block User</button>
                        </div>
                    </MenuList>
                </Menu>
            </div>
        </div>
    )
}

export default MessageHeader
