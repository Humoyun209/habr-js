import { configureStore } from "@reduxjs/toolkit";
import { dumpState, loadState } from "./storage";
import { authSlice } from "./auth/slice";


export const getStore = () => {
    const persistedState = loadState();
    const store = configureStore({
        reducer: {
            auth: authSlice.reducer
        },
        devTools: true,
        preloadedState: persistedState,

    })
    store.subscribe(() => {
        dumpState(store.getState())
    })
    return store
}