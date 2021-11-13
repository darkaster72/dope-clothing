import { collection, getDocs } from "@firebase/firestore";
import { convertCollectionSnapToMap, db } from "../../firebase/firebase.utils";
import { ShopActionTypes } from "./shop.types";

export const fetchCollectionSuccess = data => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: data
})

export const fetchCollectionError = data => ({
    type: ShopActionTypes.FETCH_COLLECTION_ERROR,
    payload: data
})

export const fetchCollectionStart = () => ({ type: ShopActionTypes.FETCH_COLLECTION_START })

export const fetchCollectionStartAsync = () => dispatch => {
    dispatch(fetchCollectionStart());
    const collRef = collection(db, 'collections')
  
    getDocs(collRef)
        .then(snap => {
            const cols = convertCollectionSnapToMap(snap)
            dispatch(fetchCollectionSuccess(cols))
        })
        .catch(e => dispatch(fetchCollectionError(e.message)))
}