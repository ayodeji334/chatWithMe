import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Sidenav from '../components/Sidenav';
import UserDetail from '../components/UserDetail';
import NoMessageSelected from '../components/NoMessageSelected';
import MessageContainer from '../components/MessageContainer';
import Chatlist from '../components/Chatlist';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';

function Chat() {
    const user = useSelector((state) => state.firebase.profile);
    const { path } = useRouteMatch();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const handleResize = () => setScreenWidth(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []);
    
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
                    <div className="chat-container h-full w-full flex bg-gray-200 lg:overflow-hidden">
                        <Sidenav />
                        <div className="w-full h-full">
                            <div className="w-full">
                                <Navbar />
                            </div>
                            <div className="flex w-full">
                                <Chatlist />
                                <div className="w-full lg:w-2/4 bg-white">
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

export default Chat;
