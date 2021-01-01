import { Heading } from "@chakra-ui/react";
import { BiArrowBack, BiEnvelope, BiUser } from "react-icons/bi";
import { FaHeartBroken, FaKey } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Sidenav from '../components/Sidenav';

function Settings() {
    const user = useSelector(state => state.firebase.profile);
    const history = useHistory();
    
    return (
        <div className="h-full w-full flex flex-row">
            <Sidenav />
            <div className="h-full w-full bg-gray-200">
                <div className="lg:mx-auto md:w-1/2 w-full bg-white h-full">
                    <div className="w-full h-full">
                        <div className="border-b-2 border-gray-400">
                            <div className="flex flex-row items-center py-2 px-3">
                                <button
                                    className="rounded-full 
                                    bg-white
                                    focus:outline-none
                                    text-black
                                    hover:bg-pink-200
                                    p-2"
                                    onClick={() => {
                                        history.goBack(-1);
                                    }}
                                >
                                    <BiArrowBack fontSize="15px" />
                                </button>
                                <Heading size="sm" fontSize="18px" className="pl-3">
                                    Settings
                                </Heading>
                            </div>
                        </div>
                        <div className="w-full h-full">
                            <ul>
                                <li>
                                    <Link className="text-left m-0 justify-start hover:bg-indigo-100" to={`edit-profile/${user.uid}`}>
                                       <BiUser fontSize="25px" /> 
                                        <span className="px-2 flex flex-col w-full">
                                            <span className="font-normal">Account information</span>
                                            <span className="text-gray-600 text-sm font-normal">Change your basic information</span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-left m-0 justify-start hover:bg-indigo-100" to="#">
                                      <BiEnvelope fontSize="25px" /> 
                                        <span className="px-2 flex flex-col w-full">
                                            <span className="font-normal">Change Email</span>
                                            <span className="text-gray-600 text-sm font-normal">Change your email at any time</span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-left m-0 justify-start hover:bg-indigo-100" to="#">
                                        <FaKey fontSize="25px" /> 
                                        <span className="px-2 flex flex-col w-full">
                                            <span className="font-normal">Change Password</span>
                                            <span className="text-gray-600 text-sm font-normal">Change your password at any time</span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-left m-0 justify-start hover:bg-indigo-100" to="#">
                                        <FaHeartBroken fontSize="25px" /> 
                                        <span className="px-2 flex flex-col w-full">
                                            <span className="font-normal">Deactivate your account</span>
                                            <span className="text-gray-600 text-sm font-normal">Learn how to deactivate your account</span>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings