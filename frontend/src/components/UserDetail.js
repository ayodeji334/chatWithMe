import React, { useRef, useState} from 'react';
import { BiMinusCircle, BiPhotoAlbum, BiTrashAlt, BiUserMinus } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { Avatar, Box, Collapse, Link, useDisclosure} from '@chakra-ui/react';

function UserDetail() {
    const groupinCommon = [
        {
            id: 1,
            name: "Developers",
        },
         {
            id: 2,
            name: "ReactJs Group",
        },
        {
            id: 3,
            name: "PHP Laravel Group"
        }
    ];
    const { isOpen, onToggle } = useDisclosure();
    const openGroupCollapse = useRef();
    const openMediaCollapse = useRef();
    const openSharedCollapse = useRef();
    const deleteRef = useRef();
    const reportRef = useRef();
    const blockRef = useRef();
    const [follow, setFollow] = useState(false);

    function toggleButton() {
        setFollow(!follow);
    }

    return (
        <div className="side-details py-5 px-3 w-1/4 bg-white border-l-2 border-fuchsia-600">
            <div className="flex justify-center items-center flex-col py-3">
                <Avatar size="lg" name={`Odunayo`} src="..." />
                <h5 className="pt-2 pb-2 m-0 text-lg font-bold"><strong>{`Odunayo`}</strong></h5>
                <button
                    onClick={toggleButton}
                    className={`${follow ? "bg-purple-600 hover:from-purple-400 hover:to-purple-700 text-white" : "bg-blue-600 hover:from-blue-400 hover:to-blue-700 text-white" } py-3 px-4 rounded font-bold rounded-full focus:outline-none`} type="submit">
                    {follow ? "Following" : "Follow"}
                </button>
            </div>
            <div className="user_detail_body">
                <div className="chat_media_shared">
                    <div className="flex justify-between border-b-2 border-fuchsia-600 border-t-2 border-fuchsia-600 p-2">
                        <span className="text-muted text-small"><b>Contact Information</b></span>
                        <Link href="#">
                            See All
                        </Link>
                    </div>
                    <div>
                        <ul className="p-0">
                            <li className="p-2"><b>Gender:</b> Male</li>
                            <li className="p-2"><b>Phone:</b> +2347023232323</li>
                            <li className="p-2"><b>Email:</b> fawumiayodeji@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="utilis">
                    <div className="flex flex-col">
                        <>
                            <button type="button" onClick={onToggle} ref={openGroupCollapse} className="shadow my-1 hover:bg-gray-100 focus:outline-none w-full mt-1 border flex items-center px-3 py-2 font-bold rounded">
                                <FaUsers /> &nbsp; Groups in Common
                            </button>
                            <Collapse in={isOpen} animateOpacity>
                                <Box
                                    p="10px"
                                    color="black"
                                    mt="0"
                                    mb="1"
                                    bg="gray.100"
                                    rounded="10px"
                               >
                                    {
                                        groupinCommon.map((group) => (
                                            <h1 key={group.id}
                                                className="font-bold text-base py-2 px-1 border-b-1 border-gray-600">{group.name}
                                            </h1>
                                        ))
                                    }
                                  </Box>
                            </Collapse>
                        </>
                        <button type="button" ref={openSharedCollapse} className="shadow my-1 hover:bg-gray-100 focus:outline-none w-full mt-1 border flex items-center px-3 py-2 font-bold rounded">
                            <BiUserMinus /> &nbsp; Shared Files
                        </button>
                        <button type="button" ref={openMediaCollapse} className="shadow my-1 hover:bg-gray-100 focus:outline-none w-full mt-1 border flex items-center px-3 py-2 font-bold rounded">
                            <BiPhotoAlbum /> &nbsp; Photo And Multimedia
                        </button>
                        <button type="button" ref={deleteRef} className="shadow my-1 hover:bg-gray-100 focus:outline-none w-full mt-1 border flex items-center px-3 py-2 font-bold rounded text-red-500">
                            <BiTrashAlt /> &nbsp; Delete Chat
                        </button>
                        <button type="button" ref={reportRef} className="shadow my-1 hover:bg-gray-100 focus:outline-none w-full mt-1 border flex items-center px-3 py-2 font-bold rounded text-red-500">
                            <BiUserMinus /> &nbsp; Report User
                        </button>
                        <button type="button" ref={blockRef} className="hover:bg-gray-100 focus:outline-none w-full mt-1 border flex items-center px-3 py-2 font-bold rounded text-red-500">
                            <BiMinusCircle /> &nbsp; Block User
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail
