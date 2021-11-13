import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root.reducer";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import reduxThunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(...middlewares()));

const persistor = persistStore(store)

export { store, persistor };

function middlewares() {
    const middlewares = [reduxThunk];

    if (process.env.NODE_ENV === 'development') {
        middlewares.push(logger);
    }

    return middlewares;
}
