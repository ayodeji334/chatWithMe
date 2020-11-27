import {
  LOG_IN_ERROR,
  LOG_IN_SUCCESS,
  LOG_OUT_ERROR,
  LOG_OUT_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS
} from '../ActionTypes/actionTypes';

const initState = {
  authErr: null,
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
        currentUser: action.payload,
        isAuthenticated: true,
        authErr: null
      } 
    case SIGN_UP_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true
      }
    case SIGN_UP_ERROR:
      return {
        ...state,
        authErr: action.payload.code
      }
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: false,
      }
    case LOG_OUT_ERROR:
      return {
        ...state,
        authErr: action.payload.code
      }
    default:
      return state;
  }
}

export default authReducer;