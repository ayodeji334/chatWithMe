import {
    ADD_CHAT,
    ADD_NEW_MESSAGE_ERROR,
    ADD_NEW_MESSAGE_SUCCESS,
    FILTER_USER_CHATS,
    GET_CHAT_MESSAGES,
    SELECT_CHAT
} from "../ActionTypes/actionTypes";
import produce from "immer";

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

export function getChatMessages(id) {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        const firestore = firebase.firestore();
        firestore
            .collection('messages')
            .where("chatId", "==", `${id}`)
            .onSnapshot(
                (querySnapshot) => {
                    let messages = [];
                    querySnapshot.forEach(function(doc) {
                        messages.push({ id: doc.id, ...doc.data() });
                    });
                    dispatch({
                        type: GET_CHAT_MESSAGES,
                        payload: messages
                    })
            });
    }
}

export function addChatMessage(message) {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        const firestore = firebase.firestore();
        firestore
            .collection('messages')
            .add(message)
            .then(
                (doc) => { 
                    console.log(doc.data())
                    dispatch({
                        type: ADD_NEW_MESSAGE_SUCCESS,
                        payload: { id: doc.id, ...doc.data() }
                    })
                })
            .catch(function (error) {
                dispatch({
                    type: ADD_NEW_MESSAGE_ERROR,
                    payload: error.message
                })
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

export function getAllUserChats(uid) {
    return (dispatch, getState, getFirebase) => {
        const firestore = getFirebase().firestore();
        
         firestore
            .collection('chats')
            .onSnapshot(
                (querySnapshot) => {
                    const chatArray = [];
                    const newChatsArray = [];

                    querySnapshot.forEach(
                        (doc) => {
                            const chat = { id: doc.id, ...doc.data() };
                            chatArray.push(chat);
                        }
                    );

                    // chatArray.forEach((chat) => {
                    //     const createdBy = firestore.collection('users').doc(chat.createdBy).get();
                    //     const receiver = firestore.collection('users').doc(chat.receiver).get().then(doc => doc.data());
                    //     const newChat = {
                    //         ...chat,
                    //         createdBy,
                    //         receiver
                    //     };
                    //     console.log(newChat);
                    //     newChatsArray.push(newChat);
                    // });

                    const user__chats = chatArray.filter(chat => {
                        return chat.createdBy === uid || chat.receiver === uid
                    });

                    dispatch({
                        type: ADD_CHAT,
                        payload: user__chats
                    });
                }
        );
        
        
    }
}