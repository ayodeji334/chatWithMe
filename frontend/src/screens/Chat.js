import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Sidenav from '../components/Sidenav';
import UserDetail from '../components/UserDetail';
import NoMessageSelected from '../components/NoMessageSelected';
import MessageContainer from '../components/MessageContainer';
import Chatlist from '../components/Chatlist';
import Navbar from '../components/Navbar';
import { connect, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';
import { getAllUserChats } from '../utils/Actions/chatActions';

function Chat({ getChats }) {
    const user = useSelector((state) => state.firebase.profile);
    const uid = useSelector(state => state.firebase.auth.uid)
    const { path } = useRouteMatch();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);

    useEffect(() => {
        getChats(uid);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [getChats, uid]);
    
    return !user.uid
        ? <Loading />
        :
        (
            screenWidth < 970
                ? 
                (
                    <div className="mobile h-full flex flex-col">
                        <Switch>
                            <Route path={path} component={Chatlist} exact/>
                            <Route path="/chat/:id" component={MessageContainer} />
                        </Switch> 
                    </div>
                )
                :
                (
                    <div className="chat-container h-full w-full flex flex-row bg-gray-200 lg:overflow-hidden">
                        <Sidenav />
                        <div className="chat-content h-full">
                            <div className="w-full">
                                <Navbar />
                            </div>
                            <div className="flex flex-row justify-between w-full h-full">
                                <Chatlist />
                                <div className="w-full bg-white messg-container">
                                    <Switch>
                                        <Route path={path} component={NoMessageSelected} exact />
                                        <Route path={`${path}/:id`} component={MessageContainer} />
                                    </Switch>
                                </div>
                                <UserDetail />
                            </div>
                        </div>
                    </div>
                )        
        );
}

const mapDispatchToProps = (dispatch) => {
    return {
        getChats: (uid) => dispatch(getAllUserChats(uid))
    }
}

export default connect(null, mapDispatchToProps)(Chat);
