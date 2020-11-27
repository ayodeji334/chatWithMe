import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { Provider, useSelector, } from 'react-redux';
import store from './utils/store';
import { isLoaded, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from './utils/firebase';
import { createFirestoreInstance } from 'redux-firestore';
import AuthStateLoading from './components/AuthStateLoading';

// react-redux-firebase config to store users in users collection
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

// react-redux-firebase props
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  userProfile: 'users',
  presence: 'presence', // where list of online users is stored in database
  sessions: 'sessions'
}

// Check the auth state.
function AuthLoaded({children}){
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) {
    return <AuthStateLoading />;
  } else {
    return children;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthLoaded>
              <App />
            </AuthLoaded>
          </ReactReduxFirebaseProvider>
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
