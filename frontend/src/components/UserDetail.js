import React, {useContext, useState} from 'react';
import { BiMinusCircle, BiTrashAlt, BiUserMinus } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { Avatar, Link} from '@chakra-ui/core';

function UserDetail() {
    const [follow, setFollow] = useState(false);

    function toggleButton() {
        setFollow(!follow);
    }

    return (
        <div className="user_detail_container">
            <div className="user_detail_header">
                <Avatar size="lg" name={`user name`} src="..." />
                <h5 className="pt-2 pb-2 m-0"><strong>{`user name`}</strong></h5>
                <button
                    className={`btn ${follow ? "btn-primary" : "btn-outline-primary"}`}
                    style={{ borderWidth: 2 }}
                    onClick={toggleButton}
                >
                    {follow ? "Following" : "Follow"}
                </button>
            </div>
            <div className="user_detail_body">
                <div className="chat_media_shared">
                    <div className="header">
                        <span className="text-muted text-small"><b>Contact Information</b></span>
                        <Link href="#">
                            See All
                        </Link>
                    </div>
                    <div>
                        <ul className="p-0">
                            <li><b>Gender:</b> Male</li>
                            <li><b>Phone:</b> +2347023232323</li>
                            <li><b>Email:</b> fawumiayodeji@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="utilis">
                    <div className="list-group">
                        <button type="button" className="list-group-item list-group-item-action"><FaUsers /> Groups in Common</button>
                        <button type="button" className="list-group-item list-group-item-action"><BiUserMinus /> Shared Files</button>
                        <button type="button" className="list-group-item list-group-item-action"><BiTrashAlt /> Delete Chat</button>
                        <button type="button" className="list-group-item list-group-item-action"><BiUserMinus /> Report User</button>
                        <button type="button" className="list-group-item list-group-item-action "><BiMinusCircle /> Block User</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail
