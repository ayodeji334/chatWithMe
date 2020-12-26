import { Avatar } from '@chakra-ui/react'
import React from 'react'
import { BiBell, BiMessageAlt, BiSearchAlt } from 'react-icons/bi'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
//import AddChatBtn from './AddChatBtn';

function FooterTab(props) {
    const history = useHistory();
    const user = useSelector(state => state.firebase.profile);

    return (
        <>
            {/* <AddChatBtn /> */}
            <div
                className="bg-white py-1 px-3 flex flex-row items-center justify-between border-t-2 border-gray-200">
                <button
                    className="bg-gray-100 p-3 rounded-full flex justify-center items-center outline-none focus:outline-none"
                    onClick={() => history.push("/chat", {
                        from: props.location
                    })}>
                    <BiMessageAlt />
                </button>
                <button
                    className="bg-gray-100 p-3 rounded-full flex justify-center items-center outline-none focus:outline-none"
                    onClick={() => history.push("/notifications", {
                        from: props.location
                    })}>
                    <BiBell />
                </button>
                <button
                    className="bg-gray-100 p-3 rounded-full flex justify-center items-center outline-none focus:outline-none"
                    onClick={() => history.push("/search", {
                        from: props.location
                    })}>
                    <BiSearchAlt />
                </button>
                <button
                    className="px-3 py-2 rounded-full flex justify-center items-center outline-none focus:outline-none"
                    onClick={() => history.push(`/profile/${user.uid}`, {
                        from: props.location
                    })}>
                    <Avatar size="sm" name={`${user.firstname} ${user.lastname}`} src="..." />
                </button>
            </div>
        </>
    )
}

export default FooterTab
