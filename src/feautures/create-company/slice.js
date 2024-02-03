import { createSlice } from "@reduxjs/toolkit";
import { build } from "vite";


const initialState = {
    photo: null,
    name: null,
    phone: null,
    city: null,
    aboutCompany: null,
    urlCompany: null
}


export const companySlice = createSlice({
    name: "company/slice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase()
    }
})