import React from 'react'
import { BiHomeCircle,BiBell,BiUser } from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { Tooltip } from "@chakra-ui/react";
import logo from '../logo.svg';

function Sidenav() {
    return (
        <div className="rounded sidenav-container hidden md:block md:w-28 bg-purple-800">
            <div className="p-2 mb-4">
                <img src={logo} height="60" width="60" alt="logo" />
            </div>
            <div className="flex flex-col w-full h-full">
                <Tooltip label="Home" placement="right">
                    <NavLink className="flex justify-center items-center py-3 my-2 mx-1 hover:text-purple-800 rounded text-white hover:bg-gray-100" activeClassName="active_link" exact to="/chat"><BiHomeCircle size="27px" /></NavLink>
                </Tooltip>
                <Tooltip label="Status">
                    <NavLink className="flex justify-center items-center py-3 my-2 mx-1 hover:text-purple-800 rounded text-white hover:bg-gray-100" activeClassName="active_link" exact to="/status"><GrStatusGood size="27px" /></NavLink>
                </Tooltip>
                <Tooltip label="Notification">
                    <NavLink className="flex justify-center items-center py-3 my-2 mx-1 hover:text-purple-800 rounded text-white hover:bg-gray-100" activeClassName="active_link" exact to="/notifications"><BiBell size="27px" /></NavLink>
                </Tooltip>
                <Tooltip label="Profile">
                    <NavLink className="flex justify-center items-center py-3 my-2 mx-1 hover:text-purple-800 rounded text-white hover:bg-gray-100" activeClassName="active_link" exact to="/profile"><BiUser size="27px"/></NavLink>
                </Tooltip> 
                <Tooltip label="Settings">
                    <NavLink className="flex justify-center items-center py-3 my-2 mx-1 hover:text-purple-800 rounded text-white hover:bg-gray-100" activeClassName="active_link" exact to="/settings"><FiSettings size="27px"/></NavLink>
                </Tooltip>
            </div>
        </div>
    )
}

export default Sidenav
