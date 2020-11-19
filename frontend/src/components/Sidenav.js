import React from 'react'
import { BiHomeCircle,BiBell,BiUser } from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { Tooltip } from "@chakra-ui/react";

function Sidenav() {
    return (
        <div className="sidenav-container hidden md:block md:w-28 p-2 bg-gray-200">
            <ul className="p-0 m-0 h-full flex flex-col items-center pt-3">
                <li className="bg-white rounded shadow p-4 mb-2 flex items-center justify-center">
                    <Tooltip label="Home" placement="right">
                        <NavLink activeClassName="active_link" exact to="/chat"><BiHomeCircle size="27px" /></NavLink>
                    </Tooltip>
                </li>
                <li className="bg-white rounded shadow p-4 mb-2 flex items-center justify-center">
                    <Tooltip label="Status">
                        <NavLink activeClassName="active_link" exact to="#"><GrStatusGood size="27px" /></NavLink>
                    </Tooltip>
                </li>
                <li className="bg-white rounded shadow p-4 mb-2 flex items-center justify-center">
                    <Tooltip label="Notification">
                        <NavLink activeClassName="active_link" exact to="#"><BiBell size="27px" /></NavLink>
                    </Tooltip>
                </li>
                <li className="bg-white rounded shadow p-4 mb-2 flex items-center justify-center">
                    <Tooltip label="Profile">
                        <NavLink activeClassName="active_link" exact to="#"><BiUser size="27px"/></NavLink>
                    </Tooltip>        
                </li>
                <li className="bg-white rounded shadow p-4 mb-2 flex items-center justify-center">
                    <Tooltip label="Settings">
                        <NavLink activeClassName="active_link" exact to="#"><FiSettings size="27px"/></NavLink>
                    </Tooltip>
                </li>
            </ul>
        </div>
    )
}

export default Sidenav
