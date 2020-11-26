import { LOG_IN_ERROR, LOG_IN_SUCCESS } from '../ActionTypes/actionTypes';

const initState = {
    currentUser: null,
    authErr: null
};

function authReducer(state = initState, action) {
  switch (action.type) {
    case LOG_IN_ERROR:
      return {
      ...state,
      authErr: action.payload.code
    }
    case LOG_IN_SUCCESS:
      return {
      ...state,
      currentUser: action.payload
    }
    case SIGN_UP_ERROR:
      return {
      ...state,
      authErr: action.payload.code
    }
    case SIGN_UP_SUCCESS:
      return {
      ...state,
      currentUser: action.payload
    }
    default:
      return state;
  }
}

export default authReducer;