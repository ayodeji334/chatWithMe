import {
    Avatar,
    Heading,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Sidenav from '../components/Sidenav';

function EditProfile() {
    // const uid = useSelector(state => state.firebase.auth.uid);
    const active_user = useSelector(state => state.firebase.profile);
    const history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState(active_user);
    const fileInput = useRef();
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleSendeUpdate = () => {
        console.log('save');
    };

    return (
        <div className="flex h-full w-full">
            <Sidenav />
            <div className="h-full w-full bg-gray-200">
                <div className="md:w-1/2 w-full md:mx-auto bg-white h-full shadow">
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
                                    Edit Profile
                                </Heading>
                            </div>
                        </div>
                        <div className="m-0 px-3">
                            <div className="w-full flex justify-center flex-col lg:flex-row lg:px-3 py-3 border-b-1 border-gray-400">
                                <div className="w-full h-full">
                                    <form onSubmit={handleSendeUpdate}>
                                        <div className="">
                                            
                                        </div>
                                        <div className="mb-4">
                                            <input type="file" className="hidden" ref={fileInput}/>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-black text-base md:text-sm font-bold mb-2" htmlFor="firstname">
                                                First Name
                                            </label>
                                            <input
                                                className="
                                                    shadow appearance-none
                                                    border rounded w-full
                                                    py-4 px-3 text-gray-700
                                                    leading-tight 
                                                    focus:outline-none
                                                    focus:shadow-outline"
                                                type="text"
                                                value={user.firstname}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-black text-base md:text-sm font-bold mb-2" htmlFor="lastname">
                                                Last Name
                                            </label>
                                            <input
                                                className="
                                                    shadow appearance-none
                                                    border rounded w-full
                                                    py-4 px-3 text-gray-700
                                                    leading-tight 
                                                    focus:outline-none
                                                    focus:shadow-outline"
                                                type="text"
                                                value={user.lastname}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-black text-base md:text-sm font-bold mb-2" htmlFor="location">
                                                Location
                                            </label>
                                            <input
                                                className="
                                                    shadow appearance-none
                                                    border rounded w-full
                                                    py-4 px-3 text-gray-700
                                                    leading-tight 
                                                    focus:outline-none
                                                    focus:shadow-outline"
                                            type="text"
                                            placeholder="Ex: Lagos"
                                                value={user.location}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-black text-base md:text-sm font-bold mb-2" htmlFor="bio">
                                                Bio
                                            </label>
                                            <textarea
                                                style={{
                                                    resize: 'none',
                                                    width: '100%',
                                                    borderWidth: 1,
                                                    borderColor: 'gray'
                                                }}
                                                cols='6'
                                                rows='8'>
                                            </textarea>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-black text-base md:text-sm font-bold mb-2" htmlFor="firstname">
                                                Birthday
                                            </label>
                                            <input
                                                className="
                                                    shadow appearance-none
                                                    border rounded w-full
                                                    py-4 px-3 text-gray-700
                                                    leading-tight 
                                                    focus:outline-none
                                                        focus:shadow-outline"
                                                type="text"
                                                placeholder="Ex: Jan, 08"
                                                    value={user.birthday}
                                                    onChange={handleChange}
                                                />
                                        </div>
                                        <div className="mb-4">
                                        <button
                                            type="submit"
                                            className="bg-blue-700 
                                            text-white rounded-full py-4 w-full lg:w-40">
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EditProfile;