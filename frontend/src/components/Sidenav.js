import React from 'react'
import { BiHomeCircle,BiBell,BiUser } from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { Tooltip } from "@chakra-ui/core";

function Sidenav() {
    return (
        <div className="sidenav-container">
            <ul className="p-0 m-0">
                <li>
                    <Tooltip label="Home" placement="right">
                        <NavLink activeClassName="active_link" exact to="/chat"><BiHomeCircle size="27px" /></NavLink>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip label="Status">
                        <NavLink activeClassName="active_link" exact to="/status"><GrStatusGood size="27px" /></NavLink>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip label="Notification">
                        <NavLink activeClassName="active_link" exact to="/notifications"><BiBell size="27px" /></NavLink>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip label="Profile">
                        <NavLink activeClassName="active_link" exact to="/profile/:id"><BiUser size="27px"/></NavLink>
                    </Tooltip>        
                </li>
                <li>
                    <Tooltip label="Settings">
                        <NavLink activeClassName="active_link" exact to="/settings"><FiSettings size="27px"/></NavLink>
                    </Tooltip>
                </li>
            </ul>
        </div>
    )
}

export default Sidenav
