import { configureStore } from '@reduxjs/toolkit'
import { dumpState, loadState } from './storage'
import { authSlice } from './auth/slice'
import { dropdownSlice } from './layout/layout-slice'
import { companyAPI } from './company/actions'
import { vacancyApi } from './vacancies/vacancy-actions'
import { responseApi } from './vacancies/response-actions'
import { resumeApi } from './resumes/resume-actions'

export const getStore = () => {
    const persistedState = loadState()
    const store = configureStore({
        reducer: {
            auth: authSlice.reducer,
            dropdown: dropdownSlice.reducer,
            [companyAPI.reducerPath]: companyAPI.reducer,
            [vacancyApi.reducerPath]: vacancyApi.reducer,
            [responseApi.reducerPath]: responseApi.reducer,
            [resumeApi.reducerPath]: resumeApi.reducer,
        },
        devTools: true,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            })
                .concat(companyAPI.middleware)
                .concat(vacancyApi.middleware)
                .concat(responseApi.middleware)
                .concat(resumeApi.middleware),
        preloadedState: persistedState,
    })
    store.subscribe(() => {
        dumpState(store.getState())
    })
    return store
}
