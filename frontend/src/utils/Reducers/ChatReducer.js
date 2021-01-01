import {
    ADD_CHAT,
    ADD_NEW_MESSAGE_ERROR,
    ADD_NEW_MESSAGE_SUCCESS,
    GET_CHAT_MESSAGES,
    SELECT_CHAT
} from "../ActionTypes/actionTypes";

const initState = {
    error: false,
    user_chats: [],
    selected_chat: {},
    selected_chat_messages: []
};

const chatReducer = (state = initState, action) =>{
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                user_chats: [...action.payload]
            }
        case SELECT_CHAT: 
            return {
                ...state,
                selected_chat: action.payload
            }
        case GET_CHAT_MESSAGES:
            return {
                ...state,
                selected_chat_messages: action.payload
            }
        case ADD_NEW_MESSAGE_SUCCESS:
            return {
                ...state,
                selected_chat_messages: [...state.selected_chat_messages, action.payload]
            }
        case ADD_NEW_MESSAGE_ERROR:
            return {
                ...state,
               error: action.payload
            }
        default:
            return state;
    };
}

export default chatReducer;