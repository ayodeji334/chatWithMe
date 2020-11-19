import React, { useState} from 'react';
import { BiMinusCircle, BiTrashAlt, BiUserMinus } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { Avatar, Link} from '@chakra-ui/react';

function UserDetail() {
    const [follow, setFollow] = useState(false);

    function toggleButton() {
        setFollow(!follow);
    }

    return (
        <div className="py-5 px-3 w-1/4 bg-white border-l-2 border-fuchsia-600">
            <div className="flex justify-center items-center flex-col py-3">
                <Avatar size="lg" name={`Odunayo`} src="..." />
                <h5 className="pt-2 pb-2 m-0"><strong>{`Odunayo`}</strong></h5>
                <button
                    onClick={toggleButton}
                    className={`${follow ? "bg-pink-500 hover:from-red-400 hover:to-pink-700 text-white" : "border-1 border-blue-500" } rounded-full font-bold py-3 px-4 rounded focus:outline-none`} type="submit">
                    {follow ? "Following" : "Follow"}
                </button>
            </div>
            <div className="user_detail_body">
                <div className="chat_media_shared">
                    <div className="flex justify-between">
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
