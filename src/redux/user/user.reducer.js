import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.GOOGLE_SIGN_IN_START:
        case UserActionTypes.EMAIL_SIGN_IN_START:
        case UserActionTypes.SIGN_OUT_START:
            return {
                ...state,
            }
        case UserActionTypes.SIGN_IN_SUCCESS:
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.SIGN_IN_ERROR:
        case UserActionTypes.SIGN_OUT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;