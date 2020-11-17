import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <div className="App h-full m-0 p-0">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </div>
  );
}

function Chat() {
  return (
    <>
      <h1>chat page</h1>
    </>
  )
}
export default App;
