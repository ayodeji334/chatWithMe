import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import PrivateRoute from './components/Privateroute';
import Chat from './screens/Chat';
import Login from './screens/Login';
import Register from './screens/Register';
import ForgetPassword from './screens/ForgetPassword';
import NotMatch from './components/NotMatch';

function App(props) {
  const { user } = props;

  return (
    <div className="App h-full m-0 p-0">
        {
          !user.uid ? 
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/forget-password" component={ForgetPassword} />
              <Route path="*" component={NotMatch} />
            </Switch>
            :
            <Chat />
        }
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
