import {
    LOG_IN_ERROR,
    LOG_IN_SUCCESS,
    LOG_OUT_ERROR,
    LOG_OUT_SUCCESS,
    SIGN_UP_ERROR,
    SIGN_UP_SUCCESS
} from "../ActionTypes/actionTypes";

export const signIn = (credentials) => {
    return (dispatch, getState, getFirebase ) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((res) => {
            dispatch({
                type: LOG_IN_SUCCESS,
                payload: res.user
            });
        }).catch(err => {
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
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        //const firestore = firebase.firestore();
        firebase.auth().createUserWithEmailAndPassword(
           user.email,
           user.password
        ).then((res) => {
            // var currentUser = firebase.auth().currentUser;
            // //Update the user auth profile
            // currentUser.updateProfile({
            //     displayName: `${user.firstname} ${user.lastname}`
            // });
            // firestore.collection("users").doc(res.user.uid).set({
            //     ...user,
            //     uid: res.user.uid
            // }).then(() => {
            //     console.log(user);
            //     dispatch({
            //         type: SIGN_UP_SUCCESS,
            //         payload: currentUser
            //     });
            // }).catch(err => {
            //     dispatch({
            //         type: SIGN_UP_ERROR,
            //         payload: err
            //     });
            // });
             dispatch({
                type: SIGN_UP_SUCCESS,
                payload: res.user,
                isAuthenticated: true
            });
        }).catch(err => {
            dispatch({
                type: SIGN_UP_ERROR,
                payload: err
            });
        });
    }
}