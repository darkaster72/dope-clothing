import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./root.reducer";
import { rootSagas } from "./root.sagas";

const saga = createSagaMiddleware()
const middlewares = [saga];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

saga.run(rootSagas);

const persistor = persistStore(store)

export { store, persistor };
