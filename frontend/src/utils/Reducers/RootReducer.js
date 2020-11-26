import authReducer from './AuthReducers';
import chatReducer from './ChatReducer';
import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    chat: chatReducer,
    user: userReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;
