import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        overview: true,
        internal: false,
        surface: false
    },
}

export const buttonSlice = createSlice({
    name: 'button',
    initialState,
    reducers: {
        showOverview: (state) => {
            state.value.overview = true
            state.value.internal = false
            state.value.surface = false
        },
        showInternal: (state) => {
            state.value.overview = false
            state.value.internal = true
            state.value.surface = false
        },
        showSurface: (state) =>{
            state.value.overview = false
            state.value.internal = false
            state.value.surface = true
        }

    }
})

export const { showOverview, showInternal, showSurface } = buttonSlice.actions

export default buttonSlice.reducer