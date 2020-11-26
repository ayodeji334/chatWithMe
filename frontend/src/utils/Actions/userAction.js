import { CREATE_NEW_USER, ERROR_CREATING_USER } from "../ActionTypes/actionTypes";

export const createUser = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection("user").add({
            ...user
        }).then((res) => {
             dispatch({
                type: CREATE_NEW_USER,
                payload: user
            });
        }).catch(err => {
            dispatch({
                type: ERROR_CREATING_USER,
                payload: err
            })
        })
       
    }
}