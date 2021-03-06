import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from '../user/user.types'
import { clearCart } from './cart.actions'

function* clearCartOnSignOut() {
    yield put(clearCart())
}

function* onSignoutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
    yield all([call(onSignoutSuccess)])
}