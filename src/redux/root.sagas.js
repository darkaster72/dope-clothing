import { all, call } from 'redux-saga/effects'
import { fetchCollectionStart } from './shop/shop.sagas'

export function* rootSagas() {
    yield all([call(fetchCollectionStart)])
}