import { ShopActionTypes } from "./shop.types";

export const addShopData = data => ({
    type: ShopActionTypes.ADD_SHOP_DATA,
    payload: data
})