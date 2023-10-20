import { createSlice } from "@reduxjs/toolkit";
import { NavigationStoreTypes } from "../types/type";

const initialState: NavigationStoreTypes = {
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    finale: false,
}

const navigationSlice = createSlice({
    name: 'navigationSlice',
    initialState,
    reducers: {
        switchToStep: (state, action) => {
            if (action.payload == 1) {
                state.step1 = true; state.step2 = false; state.step3 = false; state.step4 = false; state.finale = false
            } else if (action.payload == 2) {
                state.step1 = false; state.step2 = true; state.step3 = false; state.step4 = false; state.finale = false
            } else if (action.payload == 3) {
                state.step1 = false; state.step2 = false; state.step3 = true; state.step4 = false; state.finale = false
            } else if (action.payload == 4) {
                state.step1 = false; state.step2 = false; state.step3 = false; state.step4 = true; state.finale = false
            } else if (action.payload == 5) {
                state.step1 = false; state.step2 = false; state.step3 = false; state.step4 = false; state.finale = true
            }
        }
    }
})

export default navigationSlice.reducer
export const { switchToStep } = navigationSlice.actions