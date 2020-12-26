import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../utils/Actions/authActions';

function SlideMenu({show, toggleShow}) {
    const uid = useSelector(state => state.firebase.auth.uid);
    const dispatch = useDispatch();

    const handleMenuAction = (e) => {
        dispatch(signOut());
    };

    return (
        <div className={show ? "w-full h-full absolute z-50" : "hidden"}>
            <div className="w-full h-full slide-menu-overlay">
                <div className="h-full w-3/5 bg-white left-0 transition-all">
                    <div className="flex flex-row justify-between items-center px-3 py-2 border-b-2 border-gray-300">
                        <h1 className="font-bolder text-lg">Menu</h1>
                        <button className="p-2 bg-gray-100 hover:bg-gray-200 focus:outline-none rounded-full" onClick={() => toggleShow()}> <FaTimes /> </button>
                    </div>
                    <div className="slide__menu_list">
                        <ul className="p-0 m-0">
                            <li>
                                <Link className="font-bold" to={`/profile/${uid}`}>Profile</Link>
                            </li>
                            <li>
                                <Link className="font-bold" to="#">Lists</Link>
                            </li>
                             <li>
                                <Link className="font-bold" to="#">Topics</Link>
                            </li>
                             <li>
                                <Link className="font-bold" to="#">Moments</Link>
                            </li>
                             <li>
                                <Link className="font-bold" to="#">Follower Requests</Link>
                            </li>
                            <li>
                                <Link className="font-bold" to="#">Display</Link>
                            </li>
                            <hr className="m-1" />
                             <li>
                                <Link className="font-bold" to="#">Settings and Privacy</Link>
                            </li>
                            <li>
                                <Link className="font-bold" to="#">Help Center</Link>
                            </li>
                            <hr className="m-1" />
                            <li>
                                <Link className="font-bold" to="#">Data Saver</Link>
                                
                            </li>
                             <li>
                                <Link onClick={handleMenuAction} className="font-bold" to="#">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideMenu;
