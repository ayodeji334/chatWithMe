import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Reducers/RootReducer';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument(getFirebase, getFirestore))
    )
);

export default store;