import {
    Avatar,
    Heading,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiArrowBack, BiCake, BiCalendar, BiLink, BiLocationPlus } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Sidenav from '../components/Sidenav';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function Profile() {
    const user = useSelector((state) => state.firebase.profile);
    const [follow, setFollow] = useState(false);
    const history = useHistory();
    const { id } = useParams();

    function toggleButton() {
        if (follow) {
            confirmAlert({
                title: `Unfollow ${user.username}`,
                message: 'You will not be able to see their status. But can still chat with them if they allow it.',
                buttons: [
                    {
                        label: 'Unfollow',
                        onClick: () => {
                            setFollow(!follow)
                        }
                    },
                    {
                        label: 'Cancel',
                        onClick: () => {
                            return false
                        }
                    }
                ]
            });
        } else {
            setFollow(!follow);
        }   
    };

    return !user.uid
        ?
        <Loading />
        : (
        <div className="flex h-full w-full lg:overflow-y-hidden">
            <Sidenav />
            <div className="h-full w-full">
                <div className="md:w-1/2 w-full md:mx-auto bg-white h-full shadow">
                    <div className="w-full h-full">
                        <div className="border-b-1 border-gray-400">
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
                                    Profile
                                </Heading>
                            </div>
                        </div>
                        <div className="h-40 bg-gray-200 z-0"></div>
                        <div className="m-0">
                            <div className="w-full flex justify-center flex-col lg:flex-row lg:px-3 py-3 border-b-1 border-gray-400">
                                <div className="w-full py-3 lg:py-0 text-center lg:w-auto">
                                    <Avatar size="xl" name={`${user.firstname} ${user.lastname}`} src="..." />
                                </div>
                                <div className="flex flex-col px-3">
                                    <div className="w-full flex flex-col text-center lg:flex-row justify-center lg:justify-between">
                                        <div className="py-2 flex text-center lg:text-left flex-col justify-between">
                                            <Heading size="sm" fontSize="20px">
                                                {`${user.firstname} ${user.lastname}`}
                                            </Heading>
                                            <p className="text-gray-600 text-sm">
                                                {`@${user.username}`}
                                            </p>
                                        </div>
                                        <div className="text-center w-full">
                                            {
                                                user.uid !== id
                                                    ?
                                                    <button className="hover:bg-blue-600 hover:text-white py-3 px-4 font-bold focus:outline-none border-2 border-blue-500 rounded-full">
                                                        Edit Profile
                                                    </button>
                                                    :
                                                    <button
                                                        onClick={toggleButton}
                                                        className={`${follow ? "bg-purple-600 hover:from-purple-400 hover:to-purple-700 text-white" : "bg-blue-600 hover:from-blue-400 hover:to-blue-700 text-white"} py-3 px-4 font-bold rounded-full focus:outline-none`} type="submit">
                                                        {follow ? "Following" : "Follow"}
                                                    </button>
                                            }
                                        </div>
                                    </div> 
                                    <div className="w-full">
                                        <p className="pt-4 text-black text-sm lg:text-left text-center">
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <div className="py-3">
                                            <div className="flex flex-wrap flex-row">
                                                <span
                                                    className="flex items-center text-sm">
                                                    <BiCalendar color="#a3a3a3" />
                                                    &nbsp;
                                                    Join March, 2021
                                                </span>
                                                <span
                                                    className="ml-1 flex items-center text-sm">
                                                    <BiLink color="#a3a3a3" />
                                                    &nbsp;
                                                    <a
                                                        className="text-blue-500"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://www.micakin.com">
                                                        micakin.com
                                                    </a>
                                                </span>
                                                <span
                                                    className="ml-1 flex items-center text-sm">
                                                    <BiCake color="#a3a3a3" />
                                                    &nbsp;
                                                    Born on January, 8.
                                                </span>
                                                <span
                                                    className=" ml-1 flex items-center text-sm">
                                                    <BiLocationPlus color="#a3a3a3" />
                                                    &nbsp;
                                                    Lagos, Nigeria.
                                                </span>
                                            </div>
                                        </div>
                                        <div className="stats pt-3 w-full text-center lg:text-left">
                                            <Stack isInline={true}>
                                                <div>
                                                    <span className="font-bolder">1,270 </span>
                                                    <span className="text-gray-600"> Following</span>
                                                </div>
                                                <div>
                                                    <span className="font-bolder">111,270 </span>
                                                    <span className="text-gray-600"> Followers</span>
                                                </div>
                                            </Stack>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 border-t border-gray-400">
                                <Tabs>
                                    <TabList>
                                        <Tab className="focus:outline-none font-bolder">About</Tab>
                                        <Tab className="focus:outline-none font-bolder">Photo & Media</Tab>
                                        <Tab className="focus:outline-none font-bolder">Group in Common</Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel>
                                            <div>
                                                <ul className="p-0">
                                                    <li className="p-2"><b>Gender:</b> Male</li>
                                                    <li className="p-2"><b>Phone:</b> +2347023232323</li>
                                                    <li className="p-2"><b>Email:</b> fawumiayodeji@gmail.com</li>
                                                    <li className="p-2"><b>Level:</b> 400</li>
                                                    <li className="p-2"><b>Dept:</b> CSE</li>
                                                </ul>
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <p>Photo & Media</p>
                                        </TabPanel>
                                        <TabPanel>
                                            <p>Group  in Common</p>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;