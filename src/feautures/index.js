import { configureStore } from "@reduxjs/toolkit";
import { dumpState, loadState } from "./storage";
import { authSlice } from "./auth/slice";
import { dropdownSlice } from "./layout/layout-slice";


export const getStore = () => {
    const persistedState = loadState();
    const store = configureStore({
        reducer: {
            auth: authSlice.reducer,
            dropdown: dropdownSlice.reducer,
        },
        devTools: true,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
        }),
        preloadedState: persistedState,

    })
    store.subscribe(() => {
        dumpState(store.getState())
    })
    return store
}