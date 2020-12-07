import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/Privateroute';
import Chat from './screens/Chat';
import Login from './screens/Login';
import Register from './screens/Register';
import ForgetPassword from './screens/ForgetPassword';
import NotMatch from './screens/NotMatch';
import Profile from './screens/Profile';
import Notifications from './screens/Notifications';
import Settings from './screens/Settings';
import MessageContainer from './components/MessageContainer';

function App(props) {
  const { user } = props;

  return (
    <div className="App h-full m-0 p-0">
      <Switch>
        <Route path="/" exact render={() => user.uid ? <Redirect to="/chat" /> : <Login />}/>
        <Route path="/register" render={() => user.uid ? <Redirect to="/chat" /> : <Register />} />
        <Route path="/forget-password" render={() => user.uid ? <Redirect to="/chat" /> : <ForgetPassword />} />
        <PrivateRoute path="/chat" user={user.uid} component={Chat} />
        <PrivateRoute path="/chat/:id" user={user.uid} component={MessageContainer} />
        <PrivateRoute path="/profile" user={user.uid} component={Profile} />
        <PrivateRoute path="/notificatons" user={user.uid} component={Notifications}/>
        <PrivateRoute path="/settings" user={user.uid} component={Settings}/>
        <Route path="*" component={NotMatch} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authErr,
    user: state.firebase.auth
  }
};

export default connect(mapStateToProps)(App);
