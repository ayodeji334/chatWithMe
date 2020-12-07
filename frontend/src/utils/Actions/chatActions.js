import { ADD_CHAT, FILTER_USER_CHATS, SELECT_CHAT } from "../ActionTypes/actionTypes"

// List of all chat actions
export function createNewChat(chat) {
    return (dispatch, getState) => {
        // make async call to db
        dispatch({
            type: ADD_CHAT,
            payload: chat
        });
    }
}

export function filterUserChats(query) {
    return (dispatch, getState) => {
        dispatch({
            type: FILTER_USER_CHATS,
            payload: query
        }); 
    }
}

export function selectChat(chat) {
    return (dispatch, getState) => {
        dispatch({
            type: SELECT_CHAT,
            payload: chat
        });
    }
}