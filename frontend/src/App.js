import { Route, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/Privateroute';
import Chat from './screens/Chat';
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <div className="App h-full m-0 p-0">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/chat" auth={false} component={Chat} />
      </Switch>
    </div>
  );
}
export default App;
