import { BiArrowBack } from "react-icons/bi";
import Sidenav from '../components/Sidenav';

function Notifications() {
    return (
        <>
            <Sidenav />
            <div className="notifications_container">
                <div className="md:w-1/2 w-full bg-white h-full">
                    <div className="w-full h-full">
                        <div className="border-b-1 border-gray-200">
                            <button className="rounded-full bg-black text-white"><BiArrowBack fontSize="20px" /></button>
                            <h6 className="text-black">{" "}Notifications</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notifications
