import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Sidenav from '../components/Sidenav';
import UserDetail from '../components/UserDetail';
import NoMessageSelected from '../components/NoMessageSelected';
import MessageContainer from '../components/MessageContainer';
import Chatlist from '../components/Chatlist';
import Navbar from '../components/Navbar';

function Chat() {
    const { path } = useRouteMatch();
    return (
        <>  
            <div className="chat-container h-full w-full flex bg-gray-200 md:overflow-hidden">
                <Sidenav />
                <div className="w-full h-full">
                    <div className="w-full">
                        <Navbar />  
                    </div>
                    <div className="flex w-full">
                        <Chatlist />
                        <div className="w-2/4 bg-white">
                            <Switch>
                                <Route path={path} component={NoMessageSelected} exact />
                                <Route path={`${path}/:id`} component={MessageContainer} /> 
                            </Switch>
                        </div>
                        <UserDetail />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat
