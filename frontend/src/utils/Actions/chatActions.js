import { ADD_CHAT } from "../ActionTypes/actionTypes"

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