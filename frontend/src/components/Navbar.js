import { BiBell } from "react-icons/bi";
import {
    IconButton,
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    MenuGroup,
    MenuDivider,
} from '@chakra-ui/react';
import React, { useState } from "react";
import { BiChevronDown } from 'react-icons/bi';
import { connect } from "react-redux";
import { signOut } from "../utils/Actions/authActions";

function Navbar(props) {
    const [searchquery, setSearchQuery] = useState("");
    const { user } = props;

    const handleSearchUsers = (e) => {
        e.preventDefault();
        console.log(searchquery);
    };

    const handleMenuAction = (e) => {
        const { name } = e.currentTarget;
        switch (name) {
            case "profile":
                console.log(name);
                break;
            case "notifications":
                console.log(name);
                break;
            case "settings":
                console.log(name);
                break;
            case "logout":
                props.logUserOut();
                break;
            default:
                break;
        };
    };

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
                <div className="flex pr-3 items-center user_menu">
                    <IconButton className="focus:outline-none mr-4" isRound={true} icon={<BiBell />} size="sm" aria-label="smiley" />
                    <Menu closeOnSelect={false}>
                        <MenuButton as={Button} className="user_profile" bgColor="red" rightIcon={<BiChevronDown />}>
                             <div className="flex flex-row items-center">
                                <Avatar size="sm" name={"Fawumi Odunayo"} src="..." />
                            <h6 className="font-bold text-lg pl-2">{`${user.firstname} ${user.lastname}`}</h6>
                            </div>
                        </MenuButton>
                        <MenuList>
                             <MenuGroup title="Account" className="font-bold text-uppercase">
                                <MenuItem className="focus:outline-none" onClick={handleMenuAction} name="profile">My Profile</MenuItem>
                                <MenuItem className="focus:outline-none" onClick={handleMenuAction} name="notifications">Notifications </MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup title="Help" className="font-bold text-uppercase">
                                <MenuItem className="focus:outline-none" onClick={handleMenuAction} name="settings">Settings</MenuItem>
                                <MenuItem className="focus:outline-none" onClick={handleMenuAction} name="logout">Log Out</MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu>
                </div>
            </div>
        </header>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        logUserOut: () => dispatch(signOut())
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.firebase.profile
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);