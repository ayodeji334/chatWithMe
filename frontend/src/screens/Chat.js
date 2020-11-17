import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Sidenav from '../components/Sidenav';
import UserDetail from '../components/UserDetail';
import NoMessageSelected from '../components/NoMessageSelected';
function Chat() {
    return (
        <div className="chat-container">
            <Sidenav />
            <Switch>
                <Route path={path} component={NoMessageSelected} exact />
                <Route path={`${path}/:id`} component={MessageContainer} /> 
            </Switch>
            <UserDetail />
        </div>
    )
}

export default Chat
