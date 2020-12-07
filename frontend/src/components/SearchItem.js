import { Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

function SearchItem({ user }) {
    return (
        <Link onClick={() => console.log(user)} className="flex flex-row py-2 px-2 border-b border-gray-200 hover:bg-gray-200">
            <Avatar name={`${user.firstname} ${user.lastname}`} src="...." />
            <div className="flex flex-col pl-2 leading-relaxed">
                <h6 className="font-bolder text-md">{`${user.firstname} ${user.lastname}`}</h6>
                <p className="text-gray-500">{`@${user.firstname}${user.lastname}`}</p>
            </div>
        </Link>
    );
}

export default SearchItem;
