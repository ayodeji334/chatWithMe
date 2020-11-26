import { getFirebase } from "react-redux-firebase";
import { LOG_IN_ERROR, LOG_IN_SUCCESS, LOG_OUT_ERROR, LOG_OUT_SUCCESS, SIGN_UP_ERROR, SIGN_UP_SUCCESS } from "../ActionTypes/actionTypes";

export const signIn = (credentials) => {
    return (dispatch, getState, getFirebase ) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((res) => {
            console.log("login success")
            dispatch({
                type: LOG_IN_SUCCESS,
                payload: res
            })
        }).catch(err => {
             console.log("login failed")
            dispatch({
                type: LOG_IN_ERROR,
                payload: err
            })
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({
                type: LOG_OUT_SUCCESS,
                payload: "login out succesfully"
            })
        }).catch(err => {
            dispatch({
                type: LOG_OUT_ERROR,
                payload: err,
            })
        })
    }
}

export const signUp= (user) => {
    return (dispatch, getState, getFirebase, getFirestore) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
           user.email,
           user.password
        ).then((res) => {
            const currentUser = firebase.auth().currentUser;
            //Update the user auth profile
            currentUser.updateProfile({
                displayName: `${user.firstname} ${user.lastname}`
            });
            firestore.collection("users").docs(res.user.uid).set({
                ...user,
                uid: res.user.uid
            }).then(() => {
                dispatch({
                    type: SIGN_UP_SUCCESS,
                    payload: currentUser
                })
            }).catch(err => {
               dispatch({
                    type: SIGN_UP_ERROR,
                    payload: err
                })
            })
        }).catch(err => {
            dispatch({
                type: SIGN_UP_ERROR,
                payload: err
            })
        });
    }
}