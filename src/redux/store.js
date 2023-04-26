import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userRedux from "./userRedux";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
import storage from "redux-persist/lib/storage";

/// persist configuration ------------------------------
const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

/// root reducer, combining reducers and storing in local storage
const rootReducer = combineReducers({ user: userRedux, cart: cartReducer });

/// persisting reducer with persist config and root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

/// default store configure ------------------------------
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }),
});

export let persistor = persistStore(store);