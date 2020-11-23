import { BiBell } from "react-icons/bi";
import { IconButton, Avatar } from '@chakra-ui/react';
import React, { useState } from "react";

function Navbar() {
    const [searchquery, setSearchQuery] = useState("");

    const handleSearchUsers = (e) => {
        e.preventDefault();
        console.log(searchquery);
    }

    return (
        <header>
            <div className="bg-white flex justify-between py-3 px-2 border-b border-gray-400">
                <div className="w-2/5">
                    <form onSubmit={handleSearchUsers}>
                        <input
                            className="ml-3 rounded bg-gray-100 p-3 w-full focus:outline-none"
                            type="search"
                            placeholder="Search people here..."
                            required
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                            }}
                        />
                    </form>
                </div>
                <div className="flex pr-3 items-center">
                     <IconButton className="focus:outline-none" isRound={true} icon={<BiBell />} size="sm" aria-label="smiley" />
                    <div className="ml-2 flex items-center">
                        <Avatar size="sm" name={"Fawumi Odunayo"} src="..." />
                        <div className="pl-2">
                            <h6 className="font-bold text-lg"><strong>{"Fawumi Odunayo"}</strong></h6>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;