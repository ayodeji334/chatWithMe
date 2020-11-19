import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Sidenav from '../components/Sidenav';
import UserDetail from '../components/UserDetail';
import NoMessageSelected from '../components/NoMessageSelected';
import MessageContainer from '../components/MessageContainer';
import Chatlist from '../components/Chatlist';

function Chat() {
    const { path } = useRouteMatch();
    return (
        <div className="chat-container h-full w-full flex bg-gray-200">
            <Sidenav />
            <Chatlist />
            <div className="w-2/4 bg-white mt-1 p-2">
                <Switch>
                    <Route path={path} component={NoMessageSelected} exact />
                    <Route path={`${path}/:id`} component={MessageContainer} /> 
                </Switch>
            </div>
            
            <UserDetail />
        </div>
    )
}

export default Chat
