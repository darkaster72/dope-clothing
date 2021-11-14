import { signInWithEmailAndPassword, signInWithPopup } from '@firebase/auth';
import { getDoc } from '@firebase/firestore';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { auth, createUserProfile, getCurrentUser, googleProvider } from '../../firebase/firebase.utils';
import { signInError, signInSuccess, signOutError, signOutSuccess } from './user.actions';
import UserActionTypes from './user.types';

function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn)
}

function* googleSignIn() {
    try {
        const { user } = yield signInWithPopup(auth, googleProvider)
        yield signInWithUser(user);
    } catch (e) {
        yield put(signInError(e))
    }
}

function* signInWithUser(user) {
    try {
        const userRef = yield call(createUserProfile, user);
        const userSnapshot = yield getDoc(userRef);
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (e) {
        yield put(signInError(e))
    }
}

function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield signInWithEmailAndPassword(auth, email, password)
        yield signInWithUser(user)
    } catch (e) {
        yield put(signInError(e))
    }
}

function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

function* isUserAuthenticated() {
    try {
        const user = yield getCurrentUser();
        if (!user) return;
        yield signInWithUser(user)
    } catch (e) {
        yield put(signInError(e))
    }
}

function* onSignOut() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess(null))
    } catch (e) {
        yield put(signOutError)
    }
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOut)
    ])
}