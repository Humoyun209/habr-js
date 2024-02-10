import { createSlice } from '@reduxjs/toolkit'
import { loginThunkAction, profileThunkAction, registerThunkAction } from './thunk-actions'

const initialState = {
    access_token: null,
    error: null,
    isAuth: false,
    user: {
        email: null,
        username: null,
    },
}

export const authSlice = createSlice({
    name: '@@auth-slice',
    initialState: initialState,
    reducers: {
        LogOutAction: () => {
            return initialState
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loginThunkAction.fulfilled, (state, { payload }) => {
                state.access_token = payload.access_token
                state.isAuth = true
                state.error = null
            })
            .addCase(loginThunkAction.rejected, (state, { payload }) => {
                state.error = 'Error on Log In'
            })
            .addCase(registerThunkAction.fulfilled, (state, { payload }) => {
                state.access_token = payload.access_token
                state.isAuth = true
                state.error = null
            })
            .addCase(registerThunkAction.rejected, state => {
                state.error = 'Error on Sign Up'
            })
            .addCase(profileThunkAction.fulfilled, (state, { payload }) => {
                state.user.username = payload.username
                state.user.email = payload.email
            })
            .addCase(profileThunkAction.rejected, (state, { payload }) => {
                state.error = 'Error on get Profile'
            })
    },
})

export const { LogOutAction } = authSlice.actions
