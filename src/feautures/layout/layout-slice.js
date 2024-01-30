import { createSlice } from "@reduxjs/toolkit";


export const dropdownSlice = createSlice({
    name: 'drop/down',
    initialState: false,
    reducers: {
        changeOpenDropdown: (state) => {
            return !state
        }
    }
})


export const { changeOpenDropdown } = dropdownSlice.actions