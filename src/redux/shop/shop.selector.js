import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collection => Object.values(collection)
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections?.[collectionUrlParam] ?? null
)

export const selectCollectionIsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectCollectionIsLoaded = createSelector([selectCollections], Boolean)