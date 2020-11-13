import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" eaxct component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
