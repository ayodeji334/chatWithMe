import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { Provider, } from 'react-redux';
import store from './utils/store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from './utils/firebase';
import { createFirestoreInstance } from 'redux-firestore';

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
  createFirestoreInstance 
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
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
