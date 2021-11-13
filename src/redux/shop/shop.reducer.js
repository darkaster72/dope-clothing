import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
    collections: {}
}

export const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.ADD_SHOP_DATA:
            return {
                ...state, 
                collections: action.payload
            }
        default:
            return state;
    }
}