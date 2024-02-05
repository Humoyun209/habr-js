import { configureStore } from "@reduxjs/toolkit";
import { dumpState, loadState } from "./storage";
import { authSlice } from "./auth/slice";
import { dropdownSlice } from "./layout/layout-slice";
import { companyAPI } from "./create-company/actions";


export const getStore = () => {
    const persistedState = loadState();
    const store = configureStore({
        reducer: {
            auth: authSlice.reducer,
            dropdown: dropdownSlice.reducer,
            [companyAPI.reducerPath]: companyAPI.reducer
        },
        devTools: true,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
        }).concat(companyAPI.middleware),
        preloadedState: persistedState,

    })
    store.subscribe(() => {
        dumpState(store.getState())
    })
    return store
}