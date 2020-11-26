import { CREATE_NEW_USER, ERROR_CREATING_USER } from "../ActionTypes/actionTypes";

const initState = {
    users: []
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_NEW_USER:
            console.log("user created successfully", action.payload);
            return state;
        case ERROR_CREATING_USER:
            console.log("error while creating the user", action.payload)
    }
    return state
}

export default userReducer;