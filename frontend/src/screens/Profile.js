import {
    Avatar,
    Heading,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from "@chakra-ui/react";
import { useState } from "react";
import { BiArrowBack, BiCake, BiCalendar, BiLink, BiLocationPlus } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Sidenav from '../components/Sidenav';

function Profile() {
    const user = useSelector((state) => state.firebase.profile);
    const [follow, setFollow] = useState(false);
    const history = useHistory();

    function toggleButton() {
        setFollow(!follow);
    };

    return !user.uid ? <Loading /> : (
        <div className="flex h-full w-full overflow-y-hidden">
            <Sidenav />
            <div className="h-full w-full">
                <Navbar />
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
                        <div className="mt-3">
                            <div className="flex flex-row px-3 py-2 border-b-1 border-gray-400">
                                <Avatar size="2xl" name={`${user.firstname} ${user.lastname}`} src="..." />
                                <div className="flex flex-col px-3">
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-col justify-between">
                                            <Heading size="sm" fontSize="20px">
                                                {`${user.firstname} ${user.lastname}`}
                                            </Heading>
                                            <p className="text-gray-600 text-sm">
                                                {`@${user.firstname}${user.lastname}`}
                                            </p>
                                        </div>
                                        <button
                                            onClick={toggleButton}
                                            className={`${follow ? "bg-purple-600 hover:from-purple-400 hover:to-purple-700 text-white" : "bg-blue-600 hover:from-blue-400 hover:to-blue-700 text-white"} py-3 px-4 rounded font-bold rounded-full focus:outline-none`} type="submit">
                                            {follow ? "Following" : "Follow"}
                                        </button>
                                    </div> 
                                    <div className="w-full">
                                        <p className="pt-4 text-black text-sm">
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <div className="py-3">
                                            <Stack isInline={true}>
                                                <span
                                                    className="flex items-center text-sm">
                                                    <BiCalendar color="#a3a3a3" />
                                                    &nbsp;
                                                    Join March, 2021
                                                </span>
                                                <span
                                                    className="flex items-center text-sm">
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
                                                    className="flex items-center text-sm">
                                                    <BiCake color="#a3a3a3" />
                                                    &nbsp;
                                                    Born on January, 8.
                                                </span>
                                                <span
                                                    className="flex items-center text-sm">
                                                    <BiLocationPlus color="#a3a3a3" />
                                                    &nbsp;
                                                    Lagos, Nigeria.
                                                </span>
                                            </Stack>
                                        </div>
                                        <div className="stats pt-3 w-full">
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