import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const loginThunkAction = createAsyncThunk('auth/login', async loginData => {
    const result = await axios.post('http://127.0.0.1:8000/users/login', loginData)
    return result.data
})

export const registerThunkAction = createAsyncThunk('auth/register', async registerData => {
    const result = await axios.post('http://127.0.0.1:8000/users/register', registerData, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return result.data
})

export const profileThunkAction = createAsyncThunk('auth/profile', async (_, { getState }) => {
    const result = await axios.get('http://127.0.0.1:8000/users/profile', {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getState().auth.access_token}`,
        },
    })
    console.log(result.data)
    return result.data
})
