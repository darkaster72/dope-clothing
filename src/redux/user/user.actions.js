import UserActionTypes from "./user.types";

export const googleSignInStart = () => ({ type: UserActionTypes.GOOGLE_SIGN_IN_START })

export const emailSignInStart = (emailPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailPassword
})

export const signInSuccess = (data) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: data
})

export const signInError = (error) => ({
    type: UserActionTypes.SIGN_IN_ERROR,
    payload: error
})

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
})
export const signOutSuccess = (data) => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS,
    payload: data
})
export const signOutError = (error) => ({
    type: UserActionTypes.SIGN_OUT_ERROR,
    payload: error
})