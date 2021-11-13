import { collection, getDocs } from '@firebase/firestore'
import { call, put, takeLatest } from 'redux-saga/effects'
import { convertCollectionSnapToMap, db } from '../../firebase/firebase.utils'
import { fetchCollectionError, fetchCollectionSuccess } from './shop.actions'
import { ShopActionTypes } from './shop.types'

export function* fetchCollectionsAsync() {
    const collRef = collection(db, 'collections')
    try {
        const snap = yield getDocs(collRef)
        const cols = yield call(convertCollectionSnapToMap, snap)
        yield put(fetchCollectionSuccess(cols))
    }
    catch (e) {
        yield put(fetchCollectionError(e.message))
    }
}

export function* fetchCollectionStart() {
    // it's like switchMap
    yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync)
}
