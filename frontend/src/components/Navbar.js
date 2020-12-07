import { BiBell, BiEnvelope, BiHomeAlt } from "react-icons/bi";
import {
    IconButton,
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    MenuGroup,
    MenuDivider
} from '@chakra-ui/react';
import { useState } from "react";
import { BiChevronDown } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import { connect } from "react-redux";
import { signOut } from "../utils/Actions/authActions";
import { useHistory } from "react-router-dom";

function Navbar(props) {
    const [searchquery, setSearchQuery] = useState("");
    const { user } = props;
    const history = useHistory();

    const handleSearchUsers = (e) => {
        e.preventDefault();
        console.log(searchquery);
    };

    const handleMenuAction = (e) => {
        const { name } = e.currentTarget;
        switch (name) {
            case "profile":
               history.push("/profile")
                break;
            case "notifications":
                history.push("/notifications")
                break;
            case "settings":
                history.push("/settings")
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
            <div
                className="hidden 
                lg:flex flex-row 
                bg-white
                justify-between py-3 px-2 border-b border-gray-400">
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
                    <IconButton
                        bgColor="white"
                        fontSize="20px"
                        _hover={{
                            bgColor:"white"
                        }}
                        className="focus:outline-none mr-4 hover:bg-white hover:p-0"
                        isRound={true}
                        icon={<BiEnvelope />}
                        size="sm"
                        aria-label="envelope"
                    />
                    <IconButton
                         _hover={{
                            bgColor:"white"
                        }}
                        bgColor="white"
                        fontSize="20px"
                        className="focus:outline-none mr-4 hover:bg-white hover:p-0"
                        isRound={true}
                        icon={<BiBell />}
                        size="sm"
                        aria-label="bell"
                    />
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
            <div className="mobile_nav">
                <div
                    className="lg:hidden justify-between py-3 px-2 border-b border-gray-400 bg-white flex flex-row w-full items-center">

                      <IconButton
                         _hover={{
                            bgColor:"white"
                        }}
                        bgColor="white"
                        fontSize="20px"
                        className="focus:outline-none mr-4 hover:bg-white hover:p-0"
                        isRound={true}
                        icon={<BiHomeAlt />}
                        size="sm"
                        aria-label="bell"
                    />
                    <IconButton
                        bgColor="white"
                        fontSize="20px"
                        _hover={{
                            bgColor:"white"
                        }}
                        className="focus:outline-none mr-4 hover:bg-white hover:p-0"
                        isRound={true}
                        icon={<BiEnvelope />}
                        size="sm"
                        aria-label="envelope"
                    />
                    <IconButton
                         _hover={{
                            bgColor:"white"
                        }}
                        bgColor="white"
                        fontSize="20px"
                        className="focus:outline-none mr-4 hover:bg-white hover:p-0"
                        isRound={true}
                        icon={<BiBell />}
                        size="sm"
                        aria-label="bell"
                    />
                    <Menu closeOnSelect={false}>
                        <MenuButton as={Button} bgColor="white">
                            <FaBars  />
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